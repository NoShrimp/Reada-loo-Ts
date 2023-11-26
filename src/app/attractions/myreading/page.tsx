'use client'
import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Myreading() {

    //Get the category 

    // interface NovelCom {
    //     id: string,
    //     text: string
    // }
    // const [text, setText] = useState('')

    // const router = useRouter()

    // const [Novelcomments, setComments] = useState<NovelCom[]>([]);

    // useEffect(() => {
    //     const getNovelcom = async () => {
    //         const response = await fetch('/api/show-category')
    //         const data = await response.json();
    //         console.log(data)
    //         setComments(data)
    //     }
    //     getNovelcom();
    // }, []);

    // useEffect(() => {
    //     console.log('Comment', Novelcomments);
    // }, [Novelcomments]);


    return (
        <div>
            <section>
            <div className="bg-accent py-20">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="mb-12 font-serif text-center text-7xl font-bold">
                        <BiSolidCategory className="text-center text-7xl font-bold" />Category
                        </h1>
                        <p className="mb-14 text-2xl font- tracking-wide">
                            หมวดหมู่มากมายให้ทุกคนได้เลือกสรรค์!
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}