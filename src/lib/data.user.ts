import { prisma } from "@/prisma";

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUserByName = async (name: string) => {
  return await prisma.user.findFirst({
    where: {
      name,
    },
  });
};

export const registerUser = async (name: string, email: string, password: string) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export const updateUserVerification = async (email: string, date: Date) => {
  return await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: date,
    },
  });
}

export const findVerificationTokenByEmail = async (email: string) => {
  return await prisma.verificationToken.findFirst({
    where: {
      identifier: email,
    },
  });
}

export const findVerificationToken = async (token: string) => {
  return await prisma.verificationToken.findFirst({
    where: {
      token
    },
  });
}

export const deleteVerificationToken = async (email: string) => {
  return await prisma.verificationToken.delete({
    where: {
      identifier: email,
    },
  });
}

export const createVerificationToken = async (email: string, id: string, expires: Date) => {
  return await prisma.verificationToken.create({
    data: {
      identifier: email,
      token: id,
      expires
    },
  });
}