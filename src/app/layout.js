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

export const metadata = {
  title: "NextPlayZone",
  description:
    "Centro de juegos para la comunidad, con una gran variedad de juegos y actividades.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#10061E]`}
      >
        <Toaster position="top-center" toastOptions={{ style: { background: "#000000", color: "#F3E8FF" } }} />
        {children}
      </body>
    </html>
  );
}
