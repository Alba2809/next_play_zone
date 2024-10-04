import MainNav from "../ui/MainNav";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col h-screen pt-12 px-16">
      <MainNav />
      {children}
    </div>
  );
}
