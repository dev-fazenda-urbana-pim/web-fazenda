import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(1).min(8),
})

export default function Signin() {
  const navigate = useNavigate()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values)
    const hasErrors = Object.entries(form.formState.errors).length > 0

    if (hasErrors) {
      return
    }

    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-800">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 max-w-[500px] bg-gray-100 rounded-2xl">
          <h2 className="text-2xl text-center">Entre em sua conta</h2>

          <p className="text-center">
            Não possui conta? Crie {''}
            <Link to="/signup" className="text-blue-800 hover:underline">aqui</Link>
          </p>

          <FormField
            control={form.control}
            name="email"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Digite sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Login</Button>

          <p className="text-blue-800">
            Em caso de perda de acesso, entre em contato com
            seu gerente ou supervisor.
          </p>
        </form>
      </Form>
    </div>
  )
}
