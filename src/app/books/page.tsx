'use client'

import { useState, useEffect } from "react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";


interface Book {
    id: string,
    Title: string,
    Text: string
}

const BookPage = () => {
    const router = useRouter();

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch('/api/reading')
            const data = await response.json();
            console.log(data)
            setBooks(data)
        }
        getBooks();
    }, []);

    useEffect(() => {
        console.log('Book', books);
    }, [books]);


    return (
        <div>
            {Array.isArray(books) && books.length > 0 ? (
                books.map((book: Book) => (
                    <div key={book.id}>
                        <p className="font-bold">{book.Title}</p>
                        <p>{book.Text}</p>
                    </div>
                ))
            ) : (
                <p>No books available</p>
            )}
        </div>
    );

}
export default BookPage;