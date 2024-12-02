import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import useModalRegisterSupplier from "./useModalRegisterSupplier";

interface ModalRegisterSupplierProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

export function ModalRegisterSupplier({ isOpen }: ModalRegisterSupplierProps) {
  const { form, onSubmit } = useModalRegisterSupplier();

  // Reset form when modal is closed
  useEffect(() => {
    return () => {
      form.reset();
    };
  }, [form]);

  return (
    <Dialog modal={isOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-prussian">
          Adicionar <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[1200px] max-w-full w-full max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}  // Impede fechamento ao clicar fora
      >
        <DialogHeader>
          <DialogTitle>Cadastro de Cliente</DialogTitle>
          <DialogDescription>
            Registre novos clientes de sua fazenda.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Linha 1 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/4 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="cnpj"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CNPJ</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="socialReason"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Razão Social</FormLabel>
                      <FormControl><Input  {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/4 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="tradeName"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Fantasia</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/4 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="cep"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="address"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Endereço</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/4 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="complement"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Complemento</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>
            </div>

            {/* Linha 3 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/3 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="city"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/6 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="uf"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UF</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="neighborhood"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>
            </div>

            {/* Linha 4 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="phone"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="email"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>
            </div>

            {/* Linha 5 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full px-2 mb-4">
                <FormField
                  control={form.control}
                  name="representativeName"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Representante</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
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
              <Button type="submit" className="bg-blue-prussian">Cadastrar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
