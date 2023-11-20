import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    // Get All Comment from database
    const comments = await prisma.comment.findMany();


    return NextResponse.json(comments, { status: 200});
}