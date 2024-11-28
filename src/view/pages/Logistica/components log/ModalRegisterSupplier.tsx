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
import { Plus } from "lucide-react"
import useModalRegisterSupplier from "./useModalRegisterSupplier"

export function ModalRegisterSupplier() {
  const { form, onSubmit } = useModalRegisterSupplier()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    form.trigger() // Trigger validation before submit
    if (form.formState.isValid) {
      onSubmit() // Call the submit handler if the form is valid
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-prussian">
          Adicionar nova entrega <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
         className="sm:max-w-[800px] max-w-full w-full max-h-screen overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}  // Impede fechamento ao clicar fora
      >
        <DialogHeader>
          <DialogTitle>Cadastro de Entrega</DialogTitle>
          <DialogDescription>
            Registre novas entregas de sua fazenda.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleFormSubmit} className="space-y-8">
            {/* First Row */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="codigoEntrega"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código de Entrega</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="codigoProduto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código Produto</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="cliente"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cliente</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="cepEntrega"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP Entrega</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="veiculoEntrega"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Veículo de Entrega</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="placaVeiculo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Placa Veículo</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="statusPedido"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status Pedido</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter>
            <Button 
                  type="button"
                  className="bg-gray-300 text-gray-700"
                  onClick={() => {
                    form.reset(); // Reseta o formulário
                  }}
                  data-dismiss="dialog"
                >
                  Limpar Tudo 
                </Button>
              <Button type="submit" className="bg-green-limon">Cadastrar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
