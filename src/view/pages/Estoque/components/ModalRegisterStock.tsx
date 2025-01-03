import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { fieldsSuppliers } from "@/data/fieldsSuppliers"
import { Plus } from "lucide-react"
import useModalRegisterStock from "./useModalRegisterStock"

export function ModalRegisterStock() {
  const { form, onSubmit } = useModalRegisterStock()

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-prussian">
          Adicionar <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[750px]">
        <DialogHeader>
          <DialogTitle>Cadastro de Fornecedor</DialogTitle>
          <DialogDescription>
            Registre novos fornecedores de sua fazenda.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-wrap -mx-2">
              {fieldsSuppliers.map(({ field, label }) => (
                <div key={field} className="w-full sm:w-1/2 px-2 mb-4">
                  <FormField
                    control={form.control}
                    name={field}
                    defaultValue=""
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <DialogFooter>
              <Button type="submit" className="bg-green-limon">Cadastrar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
