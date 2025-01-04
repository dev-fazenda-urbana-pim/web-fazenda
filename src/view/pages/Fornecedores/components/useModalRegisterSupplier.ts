import SupplierService from "@/app/services/SupplierService"
import { FormSchemaRegisterSupplier, schemaRegisterSupplier } from "@/app/validations/schemaRegisterSupplier"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function useModalRegisterSupplier() {
  const { toast } = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<FormSchemaRegisterSupplier>({
    resolver: zodResolver(schemaRegisterSupplier),
  })

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: SupplierService.create,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      form.reset()
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
      toast({ title: data.message })
      setIsModalOpen(false)
    },
  })

  async function onSubmit(values: FormSchemaRegisterSupplier) {
    await mutateAsync(values)
  }

  return {
    form,
    onSubmit,
    isPending,
    isModalOpen,
    toggleModal: () => setIsModalOpen(prevState => !prevState),
  }
}
