'use client'
import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { GiHeartStake } from "react-icons/gi";

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
        <div className="bg-accent">

            <section className="text-gray-600 body-font bg-base-100 dark:bg-slate-900">
                <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1
                            className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                            Category
                        </h1>
                        <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                            Short description here, Short description here Short description here Short description here Short
                            description here Short description here.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                        <img className="object-cover object-center rounded w-full" alt="hero" src="https://i.ibb.co/Xxgb6qv/Reading-book-bro.png" />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col w-full gap-y-5 mt-10 items-center">
                    <div aria-label="card" className="p-8 rounded-3xl bg-base-100 max-w-3xl w-max xl:w-full lg:w-full sm:w-max shadow-lg">
                        <div aria-label="header" className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" /></svg>
                            <div className="space-y-0.5 flex-1">
                                <h3
                                    className="font-bold text-lg tracking-tight text-gray-900 leading-tight"
                                >
                                    # ROMANTIC
                                </h3>
                            </div>
                        </div>
                        <div aria-label="content" className="mt-9 grid gap-2.5">
                            {Novelromance.map((Novelromance: NovelCom, index: number) => (
                                <div key={index} className="flex items-center space-x-4 p-3.5 rounded-full bg-secondary">
                                    <a href="#">
                                        <div className="flex items-center space-x-4 p-3.5 rounded-full bg-secondary">
                                            <span
                                                className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-base-100 text-gray-900"
                                            >
                                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/book.png" alt="book" />
                                            </span>
                                            <div className="flex flex-col flex-1">
                                                <div className="font-bold" key={Novelromance.id}>
                                                    {Novelromance.title}
                                                    {Novelromance.text}
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 shrink-0"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 6l6 6l-6 6"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            ))}


                        </div>
                    </div>

                    <div aria-label="card" className="p-8 rounded-3xl bg-base-100 max-w-3xl w-max xl:w-full lg:w-full sm:w-max shadow-lg">
                        <div aria-label="header" className="flex items-center space-x-2">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10.381 21.275l-6.631-3.787 1.391-2.384 6.631 3.787-1.391 2.384zm7.82-19.68c-1.957-1.134-3.641-1.665-5.032-1.588-2.093.117-3.933 1.233-3.621 4.89-.394-2.267-1.817-4.178-3.5-3.869-2.234.41-1.649 3.302-1.435 5.706.191 2.155.408 4.598-.7 6.502l-2.913 4.991 10.11 5.773 2.907-4.984c1.429-2.435 3.055-3.631 4.63-4.789 1.068-.787 4.353-2.998 4.353-6.193 0-2.645-2.251-4.962-4.799-6.439" /></svg>
                            <div className="space-y-0.5 flex-1">
                                <h3
                                    className="font-bold text-lg tracking-tight text-gray-900 leading-tight"
                                >
                                    # ACTION
                                </h3>

                            </div>
                        </div>
                        <div aria-label="content" className="mt-9 grid gap-2.5">
                            {Novelaction.map((Novelaction: NovelCom, index: number) => (
                                <div key={index} className="flex items-center space-x-4 p-3.5 rounded-full bg-secondary">
                                    <a href="#">
                                        <div className="flex items-center space-x-4 p-3.5 rounded-full bg-secondary">
                                            <span
                                                className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-base-100 text-gray-900"
                                            >
                                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/book.png" alt="book" />
                                            </span>
                                            <div className="flex flex-col flex-1">
                                                <div className="font-bold" key={Novelaction.id}>
                                                    {Novelaction.title}
                                                    {Novelaction.text}
                                                </div>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-5 h-5 shrink-0"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M9 6l6 6l-6 6"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>
    )
}