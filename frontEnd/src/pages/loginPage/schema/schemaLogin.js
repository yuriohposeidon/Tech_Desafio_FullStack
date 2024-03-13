import { z } from "zod";

export const schemaLogin = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("O email fornecido é invalido")
    .min(2, "O email precisa conter pelo menos 2 caracteres"),
  password: z.string().min(8, "A senha é obrigatória e precisa de no mínimo 8 caracteres"),
});
