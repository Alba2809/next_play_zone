import { object, string } from "zod";

export const LoginSchema = object({
  email: string({ required_error: "Se requiere un correo." })
    .min(1, "S requiere un correo")
    .email("Correo no válido."),
  password: string({ required_error: "Se requiere una contraseña." })
    .min(1, "Se requiere una contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .max(32, "La contraseña debe tener menos de 20 caracteres."),
});

export const RegisterSchema = object({
  name: string({ required_error: "Se requiere un nombre de usuario." })
    .min(1, "Se requiere un nombre de usuario")
    .max(32, "El nombre de usuario debe tener menos de 32 caracteres."),
  email: string({ required_error: "Se requiere un correo." })
    .min(1, "Se requiere un correo")
    .email("Correo no válido."),
  password: string({ required_error: "Se requiere una contraseña." })
    .min(1, "Se requiere una contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .max(32, "La contraseña debe tener menos de 20 caracteres."),
});