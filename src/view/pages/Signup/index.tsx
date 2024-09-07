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
import { Link } from "react-router-dom"

const formSchema = z.object({
  username: z.string().min(2),
  email: z.string().min(1).email(),
  password: z.string().min(1).min(8),
})

export default function Signup() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-indigo-dye">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 max-w-[500px] bg-gray-100 rounded-2xl">
          <h2 className="text-2xl text-center">Crie sua conta</h2>

          <p className="text-center">
            Já possui conta? Faça {''}
            <Link to="/signin" className="text-blue-indigo-dye font-semibold hover:underline">login</Link>
          </p>

          <FormField
            control={form.control}
            name="username"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button type="submit" className="w-full bg-blue-indigo-dye">Cadastrar</Button>

          <p className="text-blue-indigo-dye font-semibold">
            Em caso de perda de acesso, entre em contato com
            seu <strong>gerente</strong> ou <strong>supervisor</strong>.
          </p>
        </form>
      </Form>
    </div>
  )
}
