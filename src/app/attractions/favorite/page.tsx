import React from 'react'

export default function favorite() {
    


    return (
        <div className="bg-neutral">
            
            <section className="text-gray-600 body-font bg-base-100 dark:bg-slate-900">
                <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1
                            className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                            My Favorite
                        </h1>
                        <p className="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                            Short description here, Short description here Short description here Short description here Short
                            description here Short description here.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                        <img className="object-cover object-center rounded w-full" alt="hero" src="https://i.ibb.co/zH2bPWB/Reading-glasses-cuate.png" />
                    </div>
                </div>
            </section>

            <section>
            <div className="flex justify-center grid grid-cols-3 gap-6 m-10">
                <article className="container bg-white shadow-lg rounded-2xl p-5">
                    <h1 className="font-bold text-neutral">Mon blog en ligne</h1>
                    <p className="font-light text-gray-500 hover:font-bold">Aujoud&apos;hui dans mon blog nous allons parler de fruits et légumes.....</p>
                    <h6 className="text-sm text-gray-300 mb-5">Publiée le 08/10/2022</h6>
                    <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-neutral">En savoir plus</a>
                </article>
                <article className="container bg-white shadow-lg rounded-2xl p-5">
                    <h1 className="font-bold text-neutral">Mon blog en ligne</h1>
                    <p className="font-light text-gray-500 hover:font-bold">Aujoud&apos;hui dans mon blog nous allons parler de fruits et légumes.....</p>
                    <h6 className="text-sm text-gray-300 mb-5">Publiée le 08/10/2022</h6>
                    <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-neutral">En savoir plus</a>
                </article>
                <article className="container bg-white shadow-lg rounded-2xl p-5">
                    <h1 className="font-bold text-neutral">Mon blog en ligne</h1>
                    <p className="font-light text-gray-500 hover:font-bold">Aujoud&apos;hui dans mon blog nous allons parler de fruits et légumes.....</p>
                    <h6 className="text-sm text-gray-300 mb-5">Publiée le 08/10/2022</h6>
                    <a href="#" className="rounded-lg py-2 px-4 text-center text-white bg-neutral">En savoir plus</a>
                </article>
            </div>
            </section>
        </div>
    )
}