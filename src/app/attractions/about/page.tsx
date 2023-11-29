import React from 'react'

const people = [
    {
        name: 'Chayut Wanitchyobon (Jorm)',
        role: 'Back End',
        imageUrl:
        'https://i.ibb.co/qFdMD8X/puppies-cute-aesthetic-heartcore-heart-kdrama-aesthetic-loveyourdog-dogs-pink-emotional-cutedogs-cut.jpg',
    },
    {
        name: 'Pawaranh Tangprom (Palmy)',
        role: 'Front End',
        imageUrl:
        'https://i.ibb.co/vdz0xKZ/tumbleleaf.jpg',
    },
    // More people...
]

export default function About() {
    return (
        <div className="bg-base-100">
            <section>
            <div className="sm:flex items-center">
                    <div className="sm:w-1/2 p-10">
                        <div className="image object-center text-center">
                            <img src="https://i.ibb.co/0tGrYhw/Portfolio-Update-amico.png" />
                        </div>
                    </div>
                    <div className="sm:w-1/2 p-10">
                        <div className="text">
                            <span className="text-gray-500 border-b-2 border-primary uppercase">About us</span>
                            <h2 className="my-4 font-bold text-3xl sm:text-4xl ">About <span className="text-primary">Our Company</span>
                            </h2>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                                doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                                voluptatum.
                            </p>
                        </div>
                    </div>
            </div>
            </section>
            <section>
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 mb-10 items-center">
                <div className="max-w-2xl p-5">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                </p>
                </div>
                <ul role="list" className="grid gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pl-10">
                {people.map((person) => (
                    <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                        <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </section>
        </div>
    )
}