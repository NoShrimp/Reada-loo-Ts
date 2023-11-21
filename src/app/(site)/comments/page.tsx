'use client'
import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"

interface Comment {
    id: string,
    title: string,
    date: string,
    checked: boolean
}

const CommentPage = () => {


    //Get All Comment
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch('/apicrud/comments')
            const data = await response.json();
            console.log(data)
            setComments(data)
        }
        getComments();
    }, []);

    useEffect(() => {
        console.log('Comment', comments);
    }, [comments]);

    const handleCheck = (index: number) => {
        const updatedComments = [...comments]
        updatedComments[index].checked = !updatedComments[index].checked
        setComments(updatedComments)
    }


    return (
        <div className="w-full max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold mt-20">All Comments</h1>
            <ul className="flex flex-col">
                {comments.length === 0 && <p className="text-2xl mt-10">No Comments here.</p>}
                {comments.map((comment: Comment, index: number) => (
                    <div className="text-2xl max-w-wl flex items-center bg-gray-100 p-3 rounded-lg gap-4 my-10">
                        <input type="checkbox" onClick={() => handleCheck(index)} />
                        <li className="font-bold" key={comment.id}>
                            {comment.title}
                        </li>
                        <li>{comment.date}</li>

                        <button className=" text-xs text-gray-900 lending-7 hover:text-gray-900/70"
                            disabled={!comment.checked}
                            // onClick={() => handleDelete(comment)}
                        >
                            {comment.checked ? "Delete" : ""}
                        </button>
                        <button
                            disabled={!comment.checked}
                            className="text-xd text-gray-900 hover:text-gray-900/70"
                            // onClick={() => handleEdit(comment)}
                        >
                            {comment.checked ? "Edit Comment" : ""}
                        </button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default CommentPage