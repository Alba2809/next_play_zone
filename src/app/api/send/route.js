import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, token } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      }
    });

    const { rejected } = await transporter.sendMail({
      from: `NextPlayZone <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Verify your email",
      html: `
          <h1>Verify your email</h1>
          <p>Click the link to verify your email.</p>
          <p><a href="${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${token}">Verify Email</a></p>
        `,
    });

    if (rejected.length > 0) {
      return NextResponse.json(
        {
          error: "Error enviando el correo de verificación, intentalo de nuevo",
        },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error enviando el correo de verificación", message: error },
      { status: 500 }
    );
  }
}
