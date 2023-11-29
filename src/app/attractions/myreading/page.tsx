'use client'
import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { useState , useEffect } from 'react'
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
                <div className="flex grid grid-cols-2 gap-2 items-center mt-10">
                    <div aria-label="card" className="p-8 rounded-3xl bg-white max-w-sm w-full shadow-lg">
                    <div aria-label="header" className="flex items-center space-x-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                        </svg>
                        <div className="space-y-0.5 flex-1">
                        <h3
                            className="font-bold text-lg tracking-tight text-gray-900 leading-tight"
                        >
                            # ROMANTIC
                        </h3>

                        </div>
                    </div>
                    <div aria-label="content" className="mt-9 grid gap-2.5">
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                <path d="M16 16a3 3 0 0 0 3 3"></path>
                                <path d="M12 16v4"></path>
                                <path
                                d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Air Conditioner</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2 unit </span>
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >18kWh</span>
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M17 17l0 .01"></path>
                                <path d="M13 17l0 .01"></path>
                                <path d="M15 13l0 -2"></path>
                                <path d="M11.75 8.75a4 4 0 0 1 6.5 0"></path>
                                <path d="M8.5 6.5a8 8 0 0 1 13 0"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Wi-Fi Router</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >1 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >8kWh</span
                                >
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
                                ></path>
                                <path d="M7 20h10"></path>
                                <path d="M9 16v4"></path>
                                <path d="M15 16v4"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Smart Tv</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >12kWh</span
                                >
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"
                                ></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Humidifier</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >1 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2kWh</span
                                >
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
                    </div>
                    
                    <div aria-label="card" className="p-8 rounded-3xl bg-white max-w-sm w-full shadow-lg">
                    <div aria-label="header" className="flex items-center space-x-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 shrink-0"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                        </svg>
                        <div className="space-y-0.5 flex-1">
                        <h3
                            className="font-bold text-lg tracking-tight text-gray-900 leading-tight"
                        >
                            # ACTION
                        </h3>

                        </div>
                    </div>
                    <div aria-label="content" className="mt-9 grid gap-2.5">
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                <path d="M16 16a3 3 0 0 0 3 3"></path>
                                <path d="M12 16v4"></path>
                                <path
                                d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Air Conditioner</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2 unit </span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >18kWh</span
                                >
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M3 13m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M17 17l0 .01"></path>
                                <path d="M13 17l0 .01"></path>
                                <path d="M15 13l0 -2"></path>
                                <path d="M11.75 8.75a4 4 0 0 1 6.5 0"></path>
                                <path d="M8.5 6.5a8 8 0 0 1 13 0"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Wi-Fi Router</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >1 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >8kWh</span
                                >
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"
                                ></path>
                                <path d="M7 20h10"></path>
                                <path d="M9 16v4"></path>
                                <path d="M15 16v4"></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Smart Tv</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >12kWh</span
                                >
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
                        <a href="#">
                        <div
                            className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100"
                        >
                            <span
                            className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z"
                                ></path>
                            </svg>
                            </span>
                            <div className="flex flex-col flex-1">
                            <h3 className="text-sm font-medium">Humidifier</h3>
                            <div className="divide-x divide-gray-200 mt-auto">
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >1 unit</span
                                >
                                <span
                                className="inline-block px-3 text-xs leading-none text-gray-400 font-normal first:pl-0"
                                >2kWh</span
                                >
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
                    </div>
                </div>
            </section>

            <section>
            <div className="bg-accent py-10">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-3xl font-bold mt-20">Romance</h1>
                        {Novelromance.map((Novelromance: NovelCom, index: number) => (
                    <div key={index} className="text-2xl max-w-wl flex items-center bg-100 p-3 rounded-lg gap-4 my-10">
                        <li className="font-bold" key={Novelromance.id}>
                            {Novelromance.title}
                            {Novelromance.text}
                        </li>
                    </div>
                ))}
                <h1 className="text-3xl font-bold mt-20">Action</h1>
                {Novelaction.map((Novelaction: NovelCom, index: number) => (
                    <div key={index} className="text-2xl max-w-wl flex items-center bg-100 p-3 rounded-lg gap-4 my-10">
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