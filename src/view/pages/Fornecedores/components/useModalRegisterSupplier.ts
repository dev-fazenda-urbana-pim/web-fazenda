import SupplierService from "@/app/services/SupplierService"
import { FormSchemaRegisterSupplier, schemaRegisterSupplier } from "@/app/validations/schemaRegisterSupplier"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

export default function useModalRegisterSupplier() {
  const { toast } = useToast()

  const form = useForm<FormSchemaRegisterSupplier>({
    resolver: zodResolver(schemaRegisterSupplier),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: SupplierService.create,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      toast({ title: data.message })
    },
  })

  async function onSubmit(values: FormSchemaRegisterSupplier) {
    await mutateAsync(values)
  }

  return {
    form,
    onSubmit,
    isPending,
  }
}
