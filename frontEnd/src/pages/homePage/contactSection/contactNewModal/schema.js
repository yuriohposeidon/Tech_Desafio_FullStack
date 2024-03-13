import { z } from "zod";

export const schemaModalNew = z.object({
  fullname: z
    .string()
    .nonempty("O nome completo é obrigatório")
    .min(2, "O email precisa conter pelo menos 2 caracteres"),

  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("O email fornecido é invalido")
    .min(2, "O email precisa conter pelo menos 2 caracteres"),

  phone: z.string().nonempty("O telefone é obrigatória"),
});
