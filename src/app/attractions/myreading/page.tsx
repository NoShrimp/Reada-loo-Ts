'use client'
import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Myreading() {

    //Get the category 

    interface NovelCom {
        id: string,
        text: string
        title: string
    }
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')

    const router = useRouter()

    const [Novelromance, setRomance] = useState<NovelCom[]>([]);
    const [Novelaction, setAction] = useState<NovelCom[]>([]);

    useEffect(() => {
        const getNovelromance = async () => {
            const response = await fetch('/api/show-category')
            const data = await response.json();
            console.log(data)
            setRomance(data)
        }
        getNovelromance();
    }, []);

    useEffect(() => {
        const getNovelaction = async () => {
            const response = await fetch('/api/show-action')
            const data = await response.json();
            console.log(data)
            setAction(data)
        }
        getNovelaction();
    }, []);

    useEffect(() => {
        console.log('Comment', Novelromance);
    }, [Novelromance]);

    useEffect(() => {
        console.log('Comment', Novelaction);
    }, [Novelaction]);

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
                        <h1 className="text-3xl font-bold mt-20">Romance</h1>
                        {Novelromance.map((Novelromance: NovelCom, index: number) => (
                    <div key={index} className="text-2xl max-w-wl flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-10">
                        <li className="font-bold" key={Novelromance.id}>
                            {Novelromance.title}
                            {Novelromance.text}
                        </li>
                    </div>
                ))}
                <h1 className="text-3xl font-bold mt-20">Action</h1>
                {Novelaction.map((Novelaction: NovelCom, index: number) => (
                    <div key={index} className="text-2xl max-w-wl flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-10">
                        <li className="font-bold" key={Novelaction.id}>
                            {Novelaction.title}
                            {Novelaction.text}
                        </li>
                    </div>
                ))}
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}