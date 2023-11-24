'use client'; // กำหนดให้โค้ดนี้ทำงานใน client side

import { useCallback, useState } from 'react'; // นำเข้าฟังก์ชัน useCallback และ useState จาก React
import { useResizeObserver } from '@wojtekmaj/react-hooks'; // นำเข้า hook useResizeObserver จาก @wojtekmaj/react-hooks
import { pdfjs, Document, Page } from 'react-pdf'; // นำเข้า pdfjs, Document, Page จาก react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // นำเข้า CSS สำหรับ AnnotationLayer
import 'react-pdf/dist/esm/Page/TextLayer.css'; // นำเข้า CSS สำหรับ TextLayer
// import '@/styles/Sample.css'; // นำเข้า CSS สำหรับ component นี้
import type { PDFDocumentProxy } from 'pdfjs-dist'; // นำเข้า type PDFDocumentProxy จาก pdfjs-dist


pdfjs.GlobalWorkerOptions.workerSrc = new URL( // กำหนดตำแหน่งของ worker script สำหรับ pdfjs
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const options = { // กำหนด options สำหรับ react-pdf
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {}; // กำหนด options สำหรับ useResizeObserver
const maxWidth = 800; // กำหนดความกว้างสูงสุดของหน้า PDF

export default function JormPDF() { // สร้าง component ชื่อ JormPDF
    const [numPages, setNumPages] = useState<number>(); // กำหนด state สำหรับ numPages
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null); // กำหนด state สำหรับ containerRef
    const [containerWidth, setContainerWidth] = useState<number>(); // กำหนด state สำหรับ containerWidth
    const onResize = useCallback<ResizeObserverCallback>((entries) => { // สร้าง callback function สำหรับการจัดการเมื่อขนาดของ container เปลี่ยนแปลง
        const [entry] = entries;
        if (entry) {
            setContainerWidth(entry.contentRect.width); // กำหนดความกว้างของ container
        }
    }, []);
    useResizeObserver(containerRef, resizeObserverOptions, onResize); // ใช้ useResizeObserver สำหรับการตรวจสอบการเปลี่ยนแปลงขนาดของ container
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void { // สร้าง function สำหรับการจัดการเมื่อเอกสาร PDF โหลดสำเร็จ
        setNumPages(nextNumPages); // กำหนดจำนวนหน้าของ PDF
    }

    return ( // สร้าง JSX สำหรับการแสดงผลของ component
        <div className="bg-white text-white dark:bg-black">
            <header className="bg-gray-800 shadow-md p-5">
                {/* แสดงหัวข้อหลักของหน้า */}
                <h1 className="text-lg m-0">react-pdf sample page</h1>
            </header>
            <div className="flex flex-col items-center my-2 py-2">
                <div>
                </div>
                <div className="w-full max-w-full mx-2 my-4" ref={setContainerRef}>
                    <Document file={'/pdf/ERD.pdf'} onLoadSuccess={onDocumentLoadSuccess} options={options} className="flex flex-col items-center">
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`} // กำหนด key สำหรับแต่ละหน้า
                                pageNumber={index + 1} // กำหนดหมายเลขหน้า
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth} // กำหนดความกว้างของหน้า โดยใช้ความกว้างของ container หรือความกว้างสูงสุด ขึ้นอยู่กับค่าที่น้อยกว่า
                                className="my-2 shadow-md"
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
