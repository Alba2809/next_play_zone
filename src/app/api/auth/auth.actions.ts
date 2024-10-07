"use server"

import { LoginSchema } from "@/src/lib/zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { z } from "zod";

export const loginAction = async (data: z.infer<typeof LoginSchema>) => {
  try {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error al iniciar sesión" };
  }
};
