import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    const {propertyType, intendedUse, refinanceReason, currentProgram, military, firstTimeBuyer, creditScore, name, email, phone} = body;

    const user = await prismadb.refinanceProspect.create({
          data: {
            propertyType,
            intendedUse,
            refinanceReason,
            currentProgram,
            military,
            creditScore,
            name,
            email,
            phone
          }
    })


    return NextResponse.json('success')
}