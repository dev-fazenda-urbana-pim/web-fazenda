import { schemaRegisterSupplier } from "@/app/validations/schemaRegisterSupplier"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function useModalRegisterClient() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schemaRegisterSupplier>>({
    resolver: zodResolver(schemaRegisterSupplier),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof schemaRegisterSupplier>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return { form, onSubmit }
}
