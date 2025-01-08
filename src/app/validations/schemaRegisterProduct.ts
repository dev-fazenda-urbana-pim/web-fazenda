import { z } from "zod";

export const schemaRegisterProduct = z.object({
  nome: z.string().min(1, { message: "O nome é obrigatório" }),
  descricao: z.string().min(1, { message: "A descrição é obrigatória" }),
  peso: z.union([
    z.string().min(1, { message: "O peso é obrigatório" }),
    z.number(),
  ]),
  preco: z.union([
    z.string().min(1, { message: "O preço é obrigatório" }),
    z.number(),
  ]),
  qtd: z.union([
    z.string().min(1, { message: "A quantidade é obrigatória" }),
    z.number(),
  ]),
  imagem: z.string().url({ message: "A imagem deve ser uma URL válida" }),
});

export type FormSchemaRegisterProduct = z.infer<typeof schemaRegisterProduct>;
