import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./src/lib/zod";
import { findUserByEmail } from "./src/lib/data";
import bcrypt from "bcryptjs";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        const { data, success } = LoginSchema.safeParse(credentials);

        if (!success) {
          throw new Error("Campos inválidos.");
        }

        let user = null;

        // logic to verify if the user exists
        user = await findUserByEmail(data.email);

        if (!user || !user.password) {
          throw new Error("Correo o contraseña inválidos.");
        }

        // logic to verify the password
        const passwordMatch = await bcrypt.compare(data.password, user.password);

        if (!passwordMatch) {
          throw new Error("Correo o contraseña inválidos.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
