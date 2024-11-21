import { deleteVerificationToken, findUserByEmail, findVerificationToken, updateUserVerification } from "@/src/lib/data.user";
import { redirect } from "next/navigation";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const token = searchParams.get("token");

  if (!token) {
    return new Response("Token not found", { status: 400 });
  }

  // verify token
  const verificationToken = await findVerificationToken(token)

  if (!verificationToken) {
    return new Response("Token not found", { status: 400 });
  }

  // verifiy expiration
  if (verificationToken.expires < new Date()) {
    return new Response("Token expired", { status: 400 });
  }

  // token verified
  const user = await findUserByEmail(verificationToken.identifier);

  if (user?.emailVerified) {
    return new Response("Email already verified", { status: 400 });
  }

  // update emailVerified
  await updateUserVerification(verificationToken.identifier, new Date());

  // delete token
  await deleteVerificationToken(verificationToken.identifier);

  redirect("/login?verified=true");
}