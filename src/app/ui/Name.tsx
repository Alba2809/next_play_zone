import { redirect } from "next/navigation";

export default function NameHeader({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <button className="flex flex-col items-center justify-center gap-2" onClick={() => redirect("/main")}>
      <h1 className={`text-5xl font-bold`}>
        <span className="text-[#C084FC]">Next</span>
        <span className="text-[#FC4754] opacity-91">Play</span>
        <span className="text-[#C084FC]">Zone</span>
      </h1>
      {children}
    </button>
  );
}