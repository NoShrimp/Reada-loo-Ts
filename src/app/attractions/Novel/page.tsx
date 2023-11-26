'use client'
import React from 'react'
import { FaPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface NovelCom {
    id: string,
    text: string
}


export default function Novel() {

    const [text, setText] = useState('')

    const router = useRouter()

    const [Novelcomments, setComments] = useState<NovelCom[]>([]);

    const handlePostCreation = async (event: React.FormEvent<HTMLFormElement>) => {
        if (!text) return alert('Please fill out all fields')

        event.preventDefault()
        const response = await fetch('/api/post-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        })
            if (response.ok) {
                alert('Post created successfully!')
                setText('')
                // router.push('/comments')
            } else {
                alert('Error commenting.')
            }

            const data = await response.json();
            console.log(data)
    }

    useEffect(() => {
        const getNovelcom = async () => {
            const response = await fetch('/api/show-comment')
            const data = await response.json();
            console.log(data)
            setComments(data)
        }
        getNovelcom();
    }, []);

    useEffect(() => {
        console.log('Comment', Novelcomments);
    }, [Novelcomments]);

    return (
        <div>
            <section>
                <div className="bg-neutral">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                            <div className="rounded-full">
                                <img src="https://img.freepik.com/free-photo/green-apple-isolated-white_2829-9403.jpg?w=1380&t=st=1700849668~exp=1700850268~hmac=5312fe2bf9e2bd49c0e0315266328dec17d1f0e9de50e2e9c8e0ecdf06343b97" className="w-min" />
                            </div>
                            </div>
                            <div className="md:flex-1 px-4 p-20">
                                <div className="badge badge-primary badge-outline font-bold p-3">Romance</div>
                                <div className="badge badge-secondary badge-outline font-bold p-3 m-1">Comedy</div>
                                <h2 className="text-4xl font-bold text-base-100 dark:text-white mb-2 pt-4">Title</h2>
                                <h3 className="text-lg font-bold text-base-100 dark:text-white mb-2 pt-2"><FaPen />Name Writer</h3>
                                <p className="text-base-100 dark:text-gray-300 text-sm mb-4 pt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                </p>
                                <div className="flex -mx-2 mb-4">
                                    <div className="w-1/2 px-2">
                                        <button className="w-full bg-accent dark:bg-gray-600 py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to favorite</button>
                                    </div>
                                    <div className="w-1/2 px-2">
                                        <FaEye className="text-base-100"/>
                                        <h3 className="text-lg font-bold text-base-100 dark:text-white mb-2">10,000,000</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
        </section>

        <section className="m-7">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
                <h3 className="text-4xl text-accent font-bold mb-2 pt-2">ตอนทั้งหมด</h3>
                        <table className="table flex flex-auto">
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                    <h3 className="text-xl font-bold text-accent">#1</h3>
                                    </div>
                                </div>
                                </td>
                                <td className="font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td className="text-center"><FaEye className="w-full pl-0"/>108</td>
                                <th>
                                    <a href="#">
                                        <button className="btn btn-secondary btn-xs">read</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                    <h3 className="text-xl font-bold text-accent">#2</h3>
                                    </div>
                                </div>
                                </td>
                                <td className="font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td className="text-center"><FaEye className="w-full pl-0"/>108</td>
                                <th>
                                    <a href="#">
                                    <button className="btn btn-secondary btn-xs">read</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                                    <div>
                                    <h3 className="text-xl font-bold text-accent">#3</h3>
                                    </div>
                                </div>
                                </td>
                                <td className="font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td className="text-center"><FaEye className="w-full pl-0"/>108</td>
                                <th>
                                    <a href="#">
                                    <button className="btn btn-secondary btn-xs">read</button>
                                    </a>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                </th>
                                <td>
                                <div className="flex items-center space-x-3">
                        
                                    <div>
                                    <h3 className="text-xl font-bold text-accent">#4</h3>
                                    </div>
                                </div>
                                </td>
                                <td className="font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                <br/>
                                </td>
                                <td className="text-center"><FaEye className="w-full pl-0"/>108</td>
                                <th>
                                    <a href="#">
                                    <button className="btn btn-secondary btn-xs">read</button>
                                    </a>
                                </th>
                            </tr>
                            </tbody>
                            
                        </table>
                    </div>
                    <h3 className="text-4xl text-accent font-bold mb-2 pt-7 pb-7">เพิ่มความคิดเห็น</h3>
                    <div className="relative max-w-5xl bg-neutral rounded-2xl border pt-4 mx-auto">
                        <div className="absolute px-2 top-0 -left-[0.5] bg-accent rounded-tl-xl rounded-br-xl">
                            <h2 className="text-md font-semibold text-gray-800">Comment</h2>
                        </div>
                        <form onSubmit={handlePostCreation}>
                            <div className="w-full px-3 mb-2 mt-6">
                                <input className="bg-gray-100 rounded border border-gray-400 leading-normal w-full h-28 p-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white" name="body" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder  ="Your comment"></input>
                            </div>
                            <div className="w-full flex justify-end px-3 my-3">
                                <button className="px-2.5 py-1.5 rounded-full font-bold bg-primary ">Submit</button>
                            </div>
                        </form>
                    </div>
            </div>
        </section>
        <div className="w-full max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mt-20">All Comments</h1>
        {Novelcomments.map((Novelcomments: NovelCom, index: number) => (
                    <div className="text-2xl max-w-wl flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-10">
                        <li className="font-bold" key={Novelcomments.id}>
                            {Novelcomments.text}
                        </li>
                    </div>

                ))}
                </div>
        </div>
    )
}