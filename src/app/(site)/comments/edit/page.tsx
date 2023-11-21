'use client'

import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface CommentProps {
    title: string,
    date: string
}

const EditPage = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [comment, setComment] = useState<CommentProps | undefined>(undefined)

    const router = useRouter()


    const searchParams = useSearchParams()
    const commentId = searchParams.get('id')
    console.log(commentId)

    useEffect(() => {
        const getComment = async () => {
            const response = await fetch(`/apicrud/comments/${commentId}`)
            const data = await response.json()
            setComment(data)
            console.log("comment", data)
        }
        if (commentId) getComment()
    }, [commentId])

    const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
        if(!title || !date) return alert('Please fill in all fields')

        event.preventDefault()
        const response = await fetch(`/apicrud/comments/${commentId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, date})
        });
        const data = await response.json()
        console.log(data)
        if(response.ok) {
            alert('Book edited successfully')
            router.push('/comments')
        }
    };

    return (
        <><div className="w-full mx-auto max-w-4xl text-center">
            <h1 className="font-bold text-2xl mt-20">Edit Comment</h1>
            {comment ? (
                <>
                    <p className="text-gray-900 leading-7">{comment.title}</p>
                    <p className="text-gray-900 leading-7">{comment.date}</p>
                </>
            ) : (
                <p>loading...</p>
            )}
            <form onSubmit={handleEdit}>
                <div className="max-w-4xl mx-auto flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-10">
                    <label className="text-lg font-bold">Comment Section</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    <label className="text-lg font-bold">Comment Date</label>
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                    <button className="border p-2 rounded-lg bg-white hover:bg-white/40" type="submit"></button>
                </div>
            </form>
        </div>
            <Link href="/comments">
                <button className="text-gray-900 underline hover:text-gray-900/70">Back to</button>
            </Link></>
    )
}

export default EditPage;