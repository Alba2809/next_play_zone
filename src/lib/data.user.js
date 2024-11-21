import { prisma } from "@/prisma";

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUserByName = async (name) => {
  return await prisma.user.findFirst({
    where: {
      name,
    },
  });
};

export const registerUser = async (name, email, password) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

export const updateUserVerification = async (email, date) => {
  return await prisma.user.update({
    where: {
      email,
    },
    data: {
      emailVerified: date,
    },
  });
}

export const findVerificationTokenByEmail = async (email) => {
  return await prisma.verificationToken.findFirst({
    where: {
      identifier: email,
    },
  });
}

export const findVerificationToken = async (token) => {
  return await prisma.verificationToken.findFirst({
    where: {
      token
    },
  });
}

export const deleteVerificationToken = async (email) => {
  return await prisma.verificationToken.delete({
    where: {
      identifier: email,
    },
  });
}

export const createVerificationToken = async (email, id, expires) => {
  return await prisma.verificationToken.create({
    data: {
      identifier: email,
      token: id,
      expires
    },
  });
}