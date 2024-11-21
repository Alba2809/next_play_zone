import Github from "../images/icons/Github";
import Dice from "../images/dice.webp";
import Dog from "../images/dog.webp";
import Snake from "../images/snake.webp";
import Sword from "../images/sword.webp";
import Warrior from "../images/warrior.webp";
import Image from "next/image";
import Link from "next/link";

function MainSection() {
  return (
    <section
      id="main"
      className="size-full mt-5 flex gap-10 items-center justify-center text-white"
    >
      <div className="w-full flex flex-col gap-5 tracking-wide">
        <h1 className="text-6xl font-bold">
          NextPlayZone <br />
          Donde cada jugada cuenta
        </h1>
        <p className="text-xl leading-8 font-medium">
          Explora una colección de divertidos y desafiantes minijuegos. Desde
          clásicos como la serpiente y el gato, hasta rompecabezas que pondrán a
          prueba tu mente. ¡Juega y disfruta!
        </p>
        <div className="flex gap-10 items-center">
          <Link
            href={"#how-to-play"}
            className="relative font-medium text-xl px-6 py-4 bg-transparent rounded-md border border-[color:--primary] after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-[color:--primary] after:opacity-61 after:w-0 after:h-full after:hover:w-full after:transition-all after:duration-500 after:-z-10 after:rounded-sm duration-300"
          >
            Como jugar
          </Link>
          <a
            href="https://github.com/Alba2809/next_play_zone"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="size-10" />
          </a>
        </div>
      </div>
      <div className="size-full relative hidden lg:block">
        <div className="absolute top-[15%] left-[20%] -rotate-12 animate-bounce-slow">
          <Image src={Sword} alt="Sword" className="size-44" />
          <Image
            src={Sword}
            alt="Sword"
            className="size-44 scale-x-[-1] absolute top-0 left-0"
          />
        </div>
        <Image
          src={Dice}
          alt="Dice"
          className="size-44 absolute top-1/3 left-[45%] animate-bounce-fast"
        />
        <Image
          src={Dog}
          alt="Dog"
          className="size-48 absolute bottom-[20%] left-[15%] animate-bounce-medium"
        />
        <Image
          src={Snake}
          alt="Snake"
          className="size-56 absolute bottom-[18%] right-[10%] animate-bounce-slow"
        />
        <Image
          src={Warrior}
          alt="Warrior"
          className="size-48 absolute top-10 right-[15%] animate-bounce"
        />
      </div>
    </section>
  );
}

export default MainSection;
