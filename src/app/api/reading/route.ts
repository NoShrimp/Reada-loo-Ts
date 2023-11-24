import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const bookId = '655f821fb8d7e83d56af6258';
export async function GET(request: Request) {
    const books = await prisma.book.findUnique({
        where : {
            id: bookId
        },
    })
    return NextResponse.json(books, { status: 200 });
}