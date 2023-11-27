import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Category from "@/app/attractions/Category/page";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    // Get All Comment from database
    const novels = await prisma.novel.findMany({
        where: {
            categoryId : "65647acc0a502436bc52b19e"
        }
    })


    return NextResponse.json(novels, { status: 200 });
}