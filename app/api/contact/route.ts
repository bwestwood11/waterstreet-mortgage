import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    const { firstName, lastName, email, phoneNumber, message } = body;

    const user = await prismadb.user.create({
          data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            message
          }
    })

    return NextResponse.json('success')
}