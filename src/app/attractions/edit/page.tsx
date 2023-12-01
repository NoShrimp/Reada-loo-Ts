'use client'
import React from 'react'


export default function edit() {
    return (
        <div className="bg-base-100">
            <h3 className="text-5xl text-accent text-center font-bold mb-2 pt-10 pb-7">EDIT!</h3>
            <div className="relative max-w-4xl w-max xl:w-full lg:w-full sm:w-max bg-secondary rounded-2xl border pt-4 mx-auto mb-5 shadow-lg">
                    <div className="absolute px-2 top-0 -left-[0.5] bg-accent rounded-tl-xl rounded-br-xl">
                        <h2 className="text-md font-semibold text-gray-800">Comment</h2>
                    </div>
                <form>
                    <div className="w-full px-3 mb-2 mt-6">
                        <input className="bg-gray-100 rounded border border-gray-400 leading-normal w-full h-28 p-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white" name="body" placeholder="Your comment"></input>
                    </div>
                    <div className="w-full flex justify-end px-3 my-3">
                        <button className="px-2.5 py-1.5 rounded-full font-bold text-white text-sm bg-primary text-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
