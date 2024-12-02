import { z } from 'zod';

export const schemaRegisterSupplier = z.object({
  cnpj: z.string()
    .min(1, { message: "CNPJ é obrigatório" })
    .length(14, { message: "CNPJ deve ter exatamente 14 caracteres" })
    .regex(/^\d{14}$/, { message: "CNPJ deve conter apenas números" }),
  socialReason: z.string()
    .min(1, { message: "Razão Social é obrigatória" }),
  tradeName: z.string()
    .min(1, { message: "Nome Fantasia é obrigatório" }),
  cep: z.string()
    .regex(/^\d{5}-\d{3}$/, { message: "CEP inválido. Use o formato 00000-000" })
    .min(1, { message: "CEP é obrigatório" }),
  address: z.string()
    .min(1, { message: "Endereço é obrigatório" }),
  city: z.string()
    .min(1, { message: "Cidade é obrigatória" }),
  uf: z.string()
    .length(2, { message: "UF deve ter exatamente 2 caracteres" })
    .regex(/^[A-Z]{2}$/, { message: "UF deve conter apenas letras maiúsculas" })
    .min(1, { message: "UF é obrigatório" }),
  neighborhood: z.string()
    .min(1, { message: "Bairro é obrigatório" }),
  phone: z.string()
    .min(1, { message: "Telefone é obrigatório" }),
  email: z.string()
    .email({ message: "E-mail inválido" })
    .min(1, { message: "E-mail é obrigatório" }),
  representativeName: z.string()
    .min(1, { message: "Nome do Representante é obrigatório" }),
  complement: z.string().optional(),
});

export type FormSchemaRegisterSupplier = z.infer<typeof schemaRegisterSupplier>;
