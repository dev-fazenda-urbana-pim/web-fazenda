import { z } from "zod";

export const schemaRegisterProduct = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  description: z.string().min(1, { message: "A descrição é obrigatória" }),
  weight: z.union([
    z.string().min(1, { message: "O peso é obrigatório" }),
    z.number(),
  ]),
  price: z.union([
    z.string().min(1, { message: "O preço é obrigatório" }),
    z.number(),
  ]),
  quantity: z.union([
    z.string().min(1, { message: "A quantidade é obrigatória" }),
    z.number(),
  ]),
  image: z.string()
    .min(1, { message: "A imagem é obrigatória" })
    .url({ message: "A imagem deve ser uma URL válida" }),
});

export type FormSchemaRegisterProduct = z.infer<typeof schemaRegisterProduct>;
