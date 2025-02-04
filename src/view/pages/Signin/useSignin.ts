import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuth from "@/app/hooks/useAuth"
import UserService from "@/app/services/UserService"
import { FormSchemaLogin, schemaLogin } from "@/app/validations/schemaLogin"

export default function useSignin() {
  const { toast } = useToast()
  const navigate = useNavigate()
  const { signin } = useAuth()

  const form = useForm<FormSchemaLogin>({
    resolver: zodResolver(schemaLogin),
  })

  const { mutateAsync, isPending } = useMutation({
    mutationFn: UserService.signin,
    onError: (error: Error) => {
      toast({ title: error.message, variant: 'destructive' })
    },
    onSuccess: (data) => {
      toast({ title: data.message })
      navigate('/')
    },
  })

  async function onSubmit(values: FormSchemaLogin) {
    const data = await mutateAsync(values)

    signin(data.accessToken)
  }

  return {
    form,
    onSubmit,
    isPending,
  }
}
