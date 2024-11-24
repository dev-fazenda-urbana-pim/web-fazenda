
import { ButtonLoading } from "@/components/ButtonLoading"
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
import useSignup from "./useSignup"

export default function Signup() {
  const { form, onSubmit, isPending } = useSignup()

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
            name="name"
            defaultValue=""
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} className="bg-gray-300" />
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
                  <Input placeholder="Digite seu email" {...field} className="bg-gray-300" />
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
                  <Input type="password" placeholder="Digite sua senha" {...field} className="bg-gray-300" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <ButtonLoading
            type="submit"
            isLoading={isPending}
            className="w-full bg-blue-indigo-dye"
          >
            Cadastrar
          </ButtonLoading>

          <p className="text-blue-indigo-dye font-semibold">
            Em caso de perda de acesso, entre em contato com
            seu <strong>gerente</strong> ou <strong>supervisor</strong>.
          </p>
        </form>
      </Form>
    </div>
  )
}
