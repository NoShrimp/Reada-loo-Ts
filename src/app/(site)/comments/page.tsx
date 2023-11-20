'use client'
import { useState, useEffect} from "react"
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
            const response = await fetch ('/apicrud/comments')
            const data = await response.json();
            console.log(data)
            setComments(data)
        }
        getComments();
    }, []);

    useEffect(() => {
        console.log('Comment',comments);
    }, [comments]);

        
    return (
        <div className="w-full max-w-5xl mx-auto text-center">
             <h1 className="text-3xl font-bold mt-20">All Comments</h1>
        </div>
    )
}

export default CommentPage