import Link from "next/link";

export default function MainNav() {
  return (
    <header
      className="flex flex-wrap justify-between items-center fixed left-16 right-16 top-5 z-50"
      id="header-nav"
    >
      <Link href={"#top"} className={`text-lg lg:text-3xl font-bold`}>
        <span className="text-[color:--secondary]">Next</span>
        <span className="text-[color:--primary] opacity-91">Play</span>
        <span className="text-[color:--secondary]">Zone</span>
      </Link>
      <nav
        className={`flex items-center justify-around gap-10 font-medium text-white text-xl`}
      >
        <Link
          href="#games"
          className="relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[color:--primary] after:opacity-61 after:h-[2px] after:w-[0%] after:hover:w-full after:transition-all after:duration-300 after:transform-origin-center hover:text-[color:--primary] opacity-91 transition-colors duration-300"
        >
          Juegos
        </Link>
        <Link
          href="#ranking"
          className="relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[color:--primary] after:opacity-61 after:h-[2px] after:w-[0%] after:hover:w-full after:transition-all after:duration-300 after:transform-origin-center hover:text-[color:--primary] opacity-91 transition-colors duration-300"
        >
          Ranking
        </Link>
        <Link
          href="#how-to-play"
          className="relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[color:--primary] after:opacity-61 after:h-[2px] after:w-[0%] after:hover:w-full after:transition-all after:duration-300 after:transform-origin-center hover:text-[color:--primary] opacity-91 transition-colors duration-300"
        >
          Como jugar
        </Link>
        <Link
          href="#about"
          className="relative after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[color:--primary] after:opacity-61 after:h-[2px] after:w-[0%] after:hover:w-full after:transition-all after:duration-300 after:transform-origin-center hover:text-[color:--primary] opacity-91 transition-colors duration-300"
        >
          Acerca de
        </Link>
        <Link
          href="/dashboard"
          className="bg-[color:--primary] opacity-91 rounded-md px-8 py-4 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_#682025] hover:rounded-sm active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none"
          id="start-button"
        >
          Empezar!
        </Link>
      </nav>
    </header>
  );
}
