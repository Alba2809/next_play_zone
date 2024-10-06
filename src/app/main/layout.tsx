import { roboto } from "../../lib/fonts";
import MainNav from "../ui/MainNav";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`flex flex-col h-screen py-12 px-16 ${roboto.className}`}>
      <MainNav />
      {children}
    </div>
  );
}
