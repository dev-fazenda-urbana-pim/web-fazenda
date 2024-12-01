import { FormSchemaSignup, schemaSignup } from "@/app/validations/schemaSignup"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuth from "../../../app/hooks/useAuth"
import UserService from "../../../app/services/UserService"

export default function useSignup() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { signin } = useAuth()

  const form = useForm<FormSchemaSignup>({
    resolver: zodResolver(schemaSignup),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: UserService.signup,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      toast({ title: data.message })
      navigate('/')
    },
  })

  async function onSubmit(values: FormSchemaSignup) {
    const data = await mutateAsync(values)

    signin(data.accessToken)
  }

  return {
    form,
    onSubmit,
    isPending,
  }
}
