import SupplierService from "@/app/services/SupplierService"
import { FormSchemaRegisterSupplier, schemaRegisterSupplier } from "@/app/validations/schemaRegisterSupplier"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function useModalRegisterSupplier() {
  const { toast } = useToast()

  const form = useForm<FormSchemaRegisterSupplier>({
    resolver: zodResolver(schemaRegisterSupplier),
  })

  // Reset form when modal is closed
  useEffect(() => {
    return () => {
      form.reset();
    };
  }, [form]);

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: SupplierService.create,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      toast({ title: data.message })
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
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
