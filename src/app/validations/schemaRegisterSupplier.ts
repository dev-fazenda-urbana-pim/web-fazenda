import { z } from 'zod';

export const schemaRegisterSupplier = z.object({
  companyName: z.string().min(1, {
    message: "Company Name is required.",
  }),
  cnpj: z.string()
    .min(1, {
      message: "CNPJ is required.",
    })
    .length(14, {
      message: "CNPJ must be exactly 14 characters.",
    })
    .regex(/^\d{14}$/, {
      message: "CNPJ must contain only numbers.",
    }),
  tradeName: z.string().min(1, {
    message: "Trade Name is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  state: z.string()
    .length(2, {
      message: "State must be exactly 2 characters.",
    })
    .regex(/^[A-Z]{2}$/, {
      message: "State must be in uppercase letters.",
    }),
  contact: z.string().min(1, {
    message: "Contact is required.",
  }).email({
    message: "Contact must be a valid email address.",
  })
});
