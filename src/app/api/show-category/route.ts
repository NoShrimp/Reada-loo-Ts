import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import Category from "@/app/attractions/favorite/page";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    // Get All Comment from database
    const novels = await prisma.novel.findMany({
        where: {
            categoryId : "65632233c7584d90441d9597"
        }
    })


    return NextResponse.json(novels, { status: 200 });
}