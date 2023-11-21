import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function GET(request: Request, {params}: {params: {id:string}}) {
    const {id} = params;

    // Get the comment with the given ID from the database
    const comment = await prisma.comment.findUnique({
        where: {
            id: id
        }
    });

    return NextResponse.json(comment, { status: 200 })
}

export async function PATCH(request: Request, {params}: {params: {id:string}}) {
    const {id} = params;
    const {title, date} = await request.json();

    // Update the comment with the given ID from the database 
    const comment = await prisma.comment.update({
        where: {
            id: id
        },
        data: {
            title: title,
            date: date
        }
    });

    return NextResponse.json(comment, { status: 200 })
}