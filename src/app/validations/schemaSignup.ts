import { z } from 'zod'

export const schemaSignup = z.object({
  name: z.string()
    .min(1, { message: "Nome é obrigatório" })
    .max(50, { message: "Nome deve ter no máximo 50 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: "Nome deve conter apenas letras e espaços" }),
  email: z.string()
    .min(1, { message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z.string()
    .min(1, { message: "Senha é obrigatória" })
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
})

export type FormSchemaSignup = z.infer<typeof schemaSignup>
