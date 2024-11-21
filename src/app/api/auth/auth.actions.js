"use server"

import { RegisterSchema } from "@/src/lib/zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { z } from "zod";
import { signOut } from "next-auth/react";
import { findUserByEmail, findUserByName, registerUser } from "@/src/lib/data.user";
import bcrypt from "bcryptjs";

export const loginAction = async (data) => {
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

// export const signInProviderAction = async (provider: string) => {
//   try {
//     const res = await signIn(provider, { redirectTo: "/dashboard" , redirect: false });
//     console.log(res);
//     return { success: true, url: res };
//   } catch (error) {
//     console.log(error);
//     if (error instanceof AuthError) {
//       return { error: error.cause?.err?.message };
//     }
//     return { error: "Error al iniciar sesión" };
//   }
// };

export const registerAction = async (values) => {
  try {
    const { data, success } = RegisterSchema.safeParse(values);
    
    if (!success) {
      return { error: "Datos inválidos" };
    }

    // validate user existence
    const user = await findUserByEmail(data.email);

    if (user) {
      return { error: "El correo ya está registrado" };
    }

    // validate username existence
    const name = await findUserByName(data.name);

    if (name) {
      return { error: "El nombre de usuario ya está registrado" };
    }

    // hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // create user
    await registerUser(data.name, data.email, hashedPassword);

    // sign in user
    const res =await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      console.log("-----SignIn error-----", res.error);
      return { error: res.error };
    }

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error al registrar usuario" };
  }
}

export const logoutAction = async () => {
  try {
    await signOut();
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error al iniciar sesión" };
  }
}