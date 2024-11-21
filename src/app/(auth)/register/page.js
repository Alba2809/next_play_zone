"use client";

import { inter } from "@/src/lib/fonts";
import { RegisterSchema } from "@/src/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerAction } from "../../api/auth/auth.actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BackgroundLayout from "../../components/BackgroundLayout";

export default function Register() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()
  const [isPending, setIsPending] = useState(false);

  const onSubmit = handleSubmit(
    async (data) => {
      if (isPending) return;
      setIsPending(true);
      const res = await registerAction(data);
      setIsPending(false);
      if (res.error) {
        toast.error(res.error);
      } else {
        router.push("/dashboard");
      }
    }
  );

  return (
    <BackgroundLayout>
      <div className="w-full h-screen flex items-center justify-center">
        <section className="">
          <div className="flex flex-col items-center justify-center gap-2">
            <Link className={`text-5xl font-bold`} href={"/"}>
              <span className="text-[#C084FC]">Next</span>
              <span className="text-[#FC4754] opacity-91">Play</span>
              <span className="text-[#C084FC]">Zone</span>
            </Link>
            <p
              className={`text-base text-[#E9D5FF] font-medium ${inter.className}`}
            >
              Tu portal a los juegos clásicos.
            </p>
          </div>
          <div
            className={`flex flex-col bg-black border border-[#A855F7] border-opacity-30 rounded-md px-7 py-9 max-w-[500px] mt-8 ${inter.className} shadow-[5px_2px_10px_rgba(0,0,0,0.25)]`}
          >
            <h1 className="font-bold text-2xl text-[#F8ECEC]">Registro</h1>
            <p className="text-[#E9D5FF] font-medium text-lg mt-3 mb-10">
              Ingrese su informaicón para crear su cuenta
            </p>
            <form
              className={`w-full flex flex-col text-lg font-medium`}
              onSubmit={onSubmit}
            >
              <label htmlFor="name" className="text-[#F3E8FF]">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="name"
                className={`w-full rounded-md bg-[#582C87] bg-opacity-50 border border-[#A855F7] border-opacity-30 py-2 px-4 text-[#D6BCFA] text-opacity-100 placeholder-[#D6BCFA] focus:outline-none focus:border-opacity-100 ${
                  errors.name && "border-red-500"
                }`}
                placeholder="User123"
                {...register("name")}
              />

              <label htmlFor="email" className="text-[#F3E8FF] mt-6">
                Correo de usuario
              </label>
              <input
                type="email"
                id="email"
                className={`w-full rounded-md bg-[#582C87] bg-opacity-50 border border-[#A855F7] border-opacity-30 py-2 px-4 text-[#D6BCFA] text-opacity-100 placeholder-[#D6BCFA] focus:outline-none focus:border-opacity-100 ${
                  errors.email && "border-red-500"
                }`}
                placeholder="example@gmail.com"
                {...register("email")}
              />

              <label htmlFor="password" className="text-[#F3E8FF] mt-6">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className={`w-full rounded-md bg-[#582C87] bg-opacity-50 border border-[#A855F7] border-opacity-30 py-2 px-4 text-[#D6BCFA] text-opacity-100 placeholder-[#D6BCFA] focus:outline-none focus:border-opacity-100 ${
                  errors.password && "border-red-500"
                }`}
                placeholder="******"
                {...register("password")}
              />

              <button
                type="submit"
                className={`w-full mt-10 px-4 py-2 bg-[#9333EA] text-white border border-[#A855F7] border-opacity-30 ${
                  isPending && "cursor-not-allowed opacity-50"
                }`}
              >
                Registrar
              </button>
            </form>
            <p className="text-center text-[#E9D5FF] font-medium text-lg mt-2">
              ¿Ya tienes una cuenta?
              <Link href="/login" className="text-[#C084FC] underline ml-3">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </section>
      </div>
    </BackgroundLayout>
  );
}
