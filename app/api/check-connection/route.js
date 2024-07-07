import { connectToDatabase } from "@/app/database/connectToDatabase";
import { NextResponse } from "next/server";

export async function GET() {
  const connection = await connectToDatabase();
  return new NextResponse("Connection success");
}
