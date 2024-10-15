import { NextRequest, NextResponse } from 'next/server';
 
export async function POST(req: NextRequest) {
    const { message } = await req.json();
    return NextResponse.json({ message: 'Hello from Next.js!', request: message });
}