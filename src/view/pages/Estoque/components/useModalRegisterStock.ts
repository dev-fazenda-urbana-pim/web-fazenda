import ProductService from "@/app/services/ProductService"
import { currencyStringToNumber } from "@/app/utils/currencyStringToNumber"
import { FormSchemaRegisterProduct, schemaRegisterProduct } from "@/app/validations/schemaRegisterProduct"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useToast } from "../../../../hooks/use-toast"

export default function useModalRegisterStock() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { toast } = useToast()

  const form = useForm<FormSchemaRegisterProduct>({
    resolver: zodResolver(schemaRegisterProduct),
  })

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: ProductService.create,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      form.reset()
      queryClient.invalidateQueries({ queryKey: ['products'] })
      setIsModalOpen(false)
      toast({ title: data.message })
    },
  })

  async function onSubmit(values: FormSchemaRegisterProduct) {
    const newProduct = {
      ...values,
      weight: currencyStringToNumber(values.weight),
      price: currencyStringToNumber(values.price),
      quantity: currencyStringToNumber(values.quantity),
    }

    await mutateAsync(newProduct)
  }

  return {
    form,
    onSubmit,
    isPending,
    isModalOpen,
    toggleModal: () => setIsModalOpen(prevState => !prevState),
  }
}
