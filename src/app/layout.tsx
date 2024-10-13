import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextPlayZone",
  description:
    "Centro de juegos para la comunidad, con una gran variedad de juegos y actividades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#10061E]`}
      >
        <div className="absolute w-full h-screen bg-[#10061E] -z-10">
          {/* Red glowing areas */}
          <div className="absolute top-24 -left-52 size-[262px] bg-[#FC4754] rounded-full filter blur-[80px]"></div>
          <div className="absolute bottom-60 right-60 size-[280px] bg-[#FC4754] rounded-full filter blur-[80px]"></div> 
          <div className="absolute -bottom-64 right-1/2 w-[351px] h-[271px] bg-[#FC4754] rounded-full filter blur-[70px]"></div>

          <div className="absolute top-48 left-80 size-[8px] bg-[#FF828B] opacity-[62%] rounded-full animate-pulse"></div>
          <div className="absolute bottom-52 left-1/3 size-[8px] bg-[#FF828B] opacity-[62%] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/2 left-1/2 size-[8px] bg-[#FF828B] opacity-[62%] rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-1/3 size-[14px] bg-[#FF828B] opacity-[62%] rounded-full filter blur-sm animate-pulse"></div>
        </div>
        <Toaster position="top-center" toastOptions={{ style: { background: "#000000", color: "#F3E8FF" } }} />
        {children}
      </body>
    </html>
  );
}
