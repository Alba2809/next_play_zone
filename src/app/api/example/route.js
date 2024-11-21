import { NextResponse } from 'next/server';
 
export async function POST(req) {
    const { message } = await req.json();
    return NextResponse.json({ message: 'Hello from Next.js!', request: message });
}