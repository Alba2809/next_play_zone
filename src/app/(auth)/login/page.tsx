"use client";

import { FieldError, useForm } from "react-hook-form";
import { inter } from "../../../lib/fonts";
import { LoginSchema } from "../../../lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLayoutEffect } from "react";
import toast from "react-hot-toast";
import { loginAction } from "../../api/auth/auth.actions";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data: z.infer<typeof LoginSchema>) => {
    const res = await loginAction(data);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/main");
    }
  });

  useLayoutEffect(() => {
    if (errors) {
      Object.values(errors).map((error) => {
        if ("message" in error && error.message) {
          toast.error(error?.message); // error es de tipo FieldError
        }
      });
    }
  }, [errors]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <section className="">
        <div className="flex flex-col items-center justify-center gap-2">
          <button
            className={`text-5xl font-bold`}
            onClick={() => router.push("/main")}
          >
            <span className="text-[#C084FC]">Next</span>
            <span className="text-[#FC4754] opacity-91">Play</span>
            <span className="text-[#C084FC]">Zone</span>
          </button>
          <p
            className={`text-base text-[#E9D5FF] font-medium ${inter.className}`}
          >
            Tu portal a los juegos clásicos.
          </p>
        </div>
        <div
          className={`flex flex-col bg-black border border-[#A855F7] border-opacity-30 rounded-md px-7 py-9 max-w-[500px] mt-8 ${inter.className} shadow-[5px_2px_10px_rgba(0,0,0,0.25)]`}
        >
          <h1 className="font-bold text-2xl text-[#F8ECEC]">Iniciar sesión</h1>
          <p className="text-[#E9D5FF] font-medium text-lg mt-3 mb-10">
            Ingrese sus credenciales para acceder a su cuenta
          </p>
          <form
            className={`w-full flex flex-col text-lg font-medium`}
            onSubmit={onSubmit}
          >
            <label htmlFor="email" className="text-[#F3E8FF]">
              Correo de usuario
            </label>
            <input
              type="email"
              id="email"
              className={`w-full rounded-md bg-[#582C87] bg-opacity-50 border border-[#A855F7] border-opacity-30 py-2 px-4 text-[#D6BCFA] text-opacity-100 placeholder-[#D6BCFA] focus:outline-none focus:border-opacity-100 ${
                errors.email && "border-red-500"
              }`}
              placeholder="User123"
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
              className="w-full mt-10 px-4 py-2 bg-[#9333EA] text-white border border-[#A855F7] border-opacity-30"
            >
              Acceder
            </button>
          </form>
          <p className="text-center text-[#E9D5FF] font-medium mt-5 text-lg">
            ¿No tienes una cuenta?
            <a href="/register" className="text-[#C084FC] underline ml-3">
              Registrate aquí
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
