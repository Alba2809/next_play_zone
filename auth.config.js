import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./src/lib/zod";
import {
  createVerificationToken,
  deleteVerificationToken,
  findUserByEmail,
  findVerificationTokenByEmail,
} from "./src/lib/data.user";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { sendEmailVerification } from "./src/lib/email";
// import GitHub from "next-auth/providers/github";
// import Google from "next-auth/providers/google";

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
        const passwordMatch = await bcrypt.compare(
          data.password,
          user.password
        );

        if (!passwordMatch) {
          throw new Error("Correo o contraseña inválidos.");
        }

        // verification of email
        if (!user.emailVerified) {
          const verificationToken = await findVerificationTokenByEmail(
            user.email
          );

          // delete token if exist
          if (verificationToken?.identifier) {
            await deleteVerificationToken(user.email);
          }

          const token = nanoid();

          await createVerificationToken(
            user.email,
            token,
            new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
          );

          // send email verification
          const res = await sendEmailVerification(user.email, token);

          if (res.error) {
            throw new Error(res.error);
          }

          throw new Error("Verifica tu correo para continuar");
        }

        // return user object with their profile data
        return user;
      },
    }),
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
};
