import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request, { params }: any) {
    const { id } = params;

    //Delete the comment with the given ID from the database 
    const comment = await prisma.novelCom.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json("Delete", { status: 200 })
}