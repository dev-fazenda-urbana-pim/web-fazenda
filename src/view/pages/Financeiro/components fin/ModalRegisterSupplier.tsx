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

export function ModalRegisterSupplier() {
  const { form, onSubmit } = useModalRegisterSupplier();

  // Reset form when modal is closed
  useEffect(() => {
    return () => {
      form.reset();
    };
  }, [form]);

  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button className="bg-blue-prussian">
          Adicionar Novo Lançamento <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent
         className="sm:max-w-[800px] max-w-full w-full max-h-screen overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}  // Impede fechamento ao clicar fora
      >
        <DialogHeader>
          <DialogTitle>Cadastro de Lançamentos</DialogTitle>
          <DialogDescription>
            Registre novos lançamentos de sua fazenda.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            {/* Linha 1 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="nome"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="telefone"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="xx xxxxx-xxxx" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>
            </div>

            {/* Linha 2 */}
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="data"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de Vencimento</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="dd/mm/aaaa" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="w-full sm:w-1/2 px-2 mb-4">
                <FormField
                  control={form.control}
                  name="valor"
                  defaultValue=""
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Valor R$</FormLabel>
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
