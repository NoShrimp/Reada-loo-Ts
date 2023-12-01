'use client'
import React from 'react'
import { FaHome } from "react-icons/fa";
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


export default function Reading() {

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

    return (
        <div className="bg-neutral">
            <section className="container max-w-6xl">
                <div className="navbar pt-5 bg-base-100 shadow-xl">
                    <div className="navbar-start">
                        <a href="/attractions" className="btn btn-ghost text-md"><FaHome className="w-full" />หน้าแรก</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <h3 className="text-base lg:text-lg md:text-base sm:text-sm font-bold mb-2 pt-2">Dimension Sorvereign มิติราชัน ตอนที่ 1</h3>
                    </div>
                    <div className="navbar-end pr-4">
                        <div className="join">
                            <a href="/attractions/reading/dimension/ep1" className="join-item btn btn-primary btn-outline rounded-lg">Previous page</a>
                            <a href="/attractions/reading/dimension/ep2" className="join-item btn btn-secondary btn-outline rounded-lg">Next</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white text-white dark:bg-black">
                    <div className="flex flex-col items-center ">
                        <div>
                        </div>
                        <div className="w-full max-w-full mx-2 my-4" ref={setContainerRef}>
                            <Document file={'/pdf/Novel/dimension/dimension1.pdf'} onLoadSuccess={onDocumentLoadSuccess} options={options} className="flex flex-col items-center">
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
            </section>
        </div>
    )
}