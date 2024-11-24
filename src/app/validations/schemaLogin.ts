import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1).min(6),
})

export type FormSchemaLogin = z.infer<typeof schemaLogin>
