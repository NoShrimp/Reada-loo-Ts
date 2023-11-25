import React from 'react'
import { FaHome } from "react-icons/fa";


export default function Reading() {
    return (
        <div className="bg-neutral">
            <section className="container max-w-6xl">
            <div className="navbar pt-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-md"><FaHome className="w-full" />หน้าแรก</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <h3 className="text-lg font-bold mb-2 pt-2">ตอนที่ 1 ความต้องการของแอปเปิ้ลผู้ถูกทรยศ</h3>
            </div>
            <div className="navbar-end pr-4">
            <div className="join">
            <button className="join-item btn btn-primary btn-outline rounded-lg">Previous page</button>
            <button className="join-item btn btn-secondary btn-outline rounded-lg">Next</button>
            </div>
            </div>
            </div>
            <div className="p-8 relative flex flex-col justify-center overflow-hidden bg-base-100 bg-gradient-to-tr from-pink-500 bg-[length:100%_calc(100%-100vh+5px)] bg-no-repeat py-6 [--tw-gradient-to:rgb(255_255_255)50%] [--tw-gradient-from:rgb(236_72_153)50%] after:fixed after:inset-0 after:top-1.5 after:-z-10 after:bg-white sm:py-12">
                <p className="text-4xl font-bold py-10">Scroll to see effect</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </div>
            </section>
        </div>
    )
}