'use client'
import React from 'react'
import { FaPen } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

interface NovelCom {
    filter(arg0: (novelcomments: NovelCom) => boolean): React.SetStateAction<NovelCom[]>;
    id: string,
    text: string
    date: string
}


export default function Novel() {

    const [text, setText] = useState('')

    const router = useRouter()

    const [Novelcomments, setComments] = useState<NovelCom[]>([]);

    // Get the current date and time
    const currentDate = new Date();

    // Format the date into "DD-MM-YYYY" format
    const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    // Format the time into "HH:MM" format
    const formattedTime = currentDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
    });

        // Combine the formatted date and time
        const formattedDateTime = `${formattedTime} | ${formattedDate}`;

    const handlePostCreation = async (event: React.FormEvent<HTMLFormElement>) => {
        if (!text) return alert('Please fill out all fields')

        event.preventDefault()
        const response = await fetch('/api/post-comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text,
                date: formattedDateTime
            })
        })
        if (response.ok) {
            window.location.reload()
            alert('แสดงความคิดเห็นเรียบร้อย!')
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

    const handleDelete = async (Novelcomments: NovelCom) => {
        try {
            const response = await fetch(`/api/delete-comment/${Novelcomments.id}`, {
                method: "DELETE"
            })
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                alert('Comment deleted successfully')
                setComments(Novelcomments.filter((novelcomments: NovelCom) => novelcomments.id !== data.id))
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="bg-base-100">
            <section>
                <div className="bg-neutral">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4 p-12">
                                <div>
                                    <img src="https://i.ibb.co/cFSgVFn/Dimensional-Sovereign.jpg" className="w-mix rounded-lg shadow-lg" />
                                </div>
                            </div>
                            <div className="md:flex-1 px-4 p-20">
                                <div className="badge badge-primary badge-outline font-bold p-3">Action</div>
                                <div className="badge badge-secondary badge-outline font-bold p-3 m-1">Fantasy</div>
                                <h2 className="text-4xl font-bold text-base-100 dark:text-white mb-2 pt-4">Dimension Sorvereign มิติราชัน</h2>
                                <h3 className="text-lg font-bold text-base-100 dark:text-white mb-2 pt-2"><FaPen />오렌</h3>
                                <p className="text-base-100 dark:text-gray-300 text-sm mb-4 pt-2">
                                    วันหนึ่งพระเอกได้รับพลังอันลึกลับจากมิติแห่งความฝัน ถ้าได้ฆ่าสัตว์ประหลาดในความฝัน ระดับพลังจะเพิ่มขึ้นในชีวิตจริง บ้านในความจริงจะกลายเป็นฐานทัพในความฝัน การวางกลยุทธในชีวิตจริง และมิติแห่งความฝันจะเชื่อมโยงถึงกัน ทั้งเงินตราและความแข็งแกร่ง สักวันหนึ่งเขาจะได้ครองโลก
                                </p>
                                <div className="flex -mx-2 mb-4">
                                    {/* <div className="w-1/2 px-2">
                                        <button className="w-full bg-accent dark:bg-gray-600 py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to favorite</button>
                                    </div> */}
                                    {/* <div className="w-1/2 px-2">
                                        <FaEye className="text-base-100" />
                                        <h3 className="text-lg font-bold text-base-100 dark:text-white mb-2">10,000,000</h3>
                                    </div> */}
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
                                        Dimension Sorvereign มิติราชัน ตอนที่ 1
                                        <br />
                                    </td>
                                    <td className="text-center"><FaEye className="w-full pl-0" />234,199</td>
                                    <th>
                                        <a href="/attractions/reading/dimension/ep1">
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
                                        Dimension Sorvereign มิติราชัน ตอนที่ 2
                                        <br />
                                    </td>
                                    <td className="text-center"><FaEye className="w-full pl-0" />194,654</td>
                                    <th>
                                        <a href="/attractions/reading/dimension/ep2">
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
                                        Dimension Sorvereign มิติราชัน ตอนที่ 3
                                        <br />
                                    </td>
                                    <td className="text-center"><FaEye className="w-full pl-0" />180,190</td>
                                    <th>
                                        <a href="/attractions/reading/dimension/ep3">
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
                                        Dimension Sorvereign มิติราชัน ตอนที่ 4
                                        <br />
                                    </td>
                                    <td className="text-center"><FaEye className="w-full pl-0" />0</td>
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
                    <div className="relative max-w-5xl bg-secondary rounded-2xl border pt-4 mx-auto mb-10 shadow-lg">
                        <div className="absolute px-2 top-0 -left-[0.5] bg-accent rounded-tl-xl rounded-br-xl">
                            <h2 className="text-md font-semibold text-gray-800">Comment</h2>
                        </div>
                        <form onSubmit={handlePostCreation}>
                            <div className="w-full px-3 mb-2 mt-6">
                                <input className="bg-gray-100 rounded border border-gray-400 leading-normal w-full h-28 p-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white" name="body" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Your comment"></input>
                            </div>
                            <div className="w-full flex justify-end px-3 my-3">
                                <button className="px-2.5 py-1.5 rounded-full font-bold bg-primary ">Submit</button>
                            </div>
                        </form>
                    </div>

                    <h1 className="text-4xl text-accent font-bold pt-7 pb-10">รีวิวทั้งหมด</h1>
                    {Novelcomments.map((Novelcomments: NovelCom, index: number) => (
                    <div key={index}>
                        <div className="font-bold" key={Novelcomments.id}>
                    <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-xl bg-white shadow-lg">
                        <div className="relative flex gap-4">
                            <img src="https://i.ibb.co/0Xj0sPy/pom-pom-honkai-star-rail-by-mieaka-dfwi0ug-pre.jpg" className="relative rounded-full -top-8 -mb-4 bg-white border h-20 w-20" />
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between">
                                    <p className="relative text-xl font-bold whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                                    <a className="text-gray-500 text-xl" href="#">
                                        <i><FaEdit className="pb-2 w-6 h-6 text-accent"/></i>
                                        <i><FaTrash className="text-secondary " onClick={() => handleDelete(Novelcomments)}/></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p className="-mt-4 text-base text-gray-500">{Novelcomments.text}</p>
                                <p className="-mt-4 text text-gray-500">{Novelcomments.date}</p>
                    </div>
                    </div>
                    </div>
                    ))}
                </div>
            </section>
            <div className="w-full max-w-5xl mx-auto text-center">

            </div>
        </div>
    )
}