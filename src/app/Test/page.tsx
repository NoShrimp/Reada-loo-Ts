'use client'
import React from 'react'

// import { Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// const styles = StyleSheet.create({});

// const PDFFile = () => {
//     <Document>
//         <Page size={'A4'}>
//             <View>
//                 <Text>
//                 การเดินทางตลอดหนึ่งปีที่ผ่านมา เราต้องเจอกับเรื่องราวมากมาย เผชิญหน้ากับเหตุการณ์ไม่คาดคิด และรับมือกับหลายความรู้สึกที่เกาะกุมอยู่ในใจ ด้วยเหตุนี้ ยิ่งใกล้ช่วงท้ายปี หลายคนเลยอยากปล่อยให้ ‘ปีเก่า’ เป็นเรื่องราวของ ‘ปีเก่า’ พร้อมทิ้งเรื่องราวเดิมๆ ไว้ข้างหลังและมุ่งหน้าสู่การเดินทางใหม่ที่กำลังจะมาถึง

// แต่แทนที่จะโยนทิ้งและปล่อยให้เป็นเรื่องราวในอดีตเฉยๆ อย่าลืมว่าจริงๆ แล้วการเดินทางอันยาวนานตลอด 1 ปีที่ผ่านมาให้อะไรเรามากมาย  มาร่วมส่งท้ายปีเก่าด้วยการรู้จักตัวเอง ย้อนมองบทเรียน และรับกำลังใจดีๆ ผ่าน 12 บทความให้กำลังใจจาก Mission To The Moon

// ก่อนจะโอบรับการเดินทางครั้งใหม่ด้วยกำลังใจเต็มเปี่ยมไปด้วยกัน
//                 </Text>
//             </View>
//         </Page>
//     </Document>
// }



export default function page() {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="http://cosci.swu.ac.th/storage/downloads/mZIhMInPhjY7z74x8z6m8meYUvd0mEqfLJ9QpjGJ.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
