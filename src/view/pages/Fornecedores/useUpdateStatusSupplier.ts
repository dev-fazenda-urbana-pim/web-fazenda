import SupplierService from "@/app/services/SupplierService"
import { SupplierUpdate } from "@/app/types/Supplier"
import { useToast } from "@/hooks/use-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useUpdateStatusSupplier() {
  const { toast } = useToast()

  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: SupplierService.updateStatus,
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        description: error.message,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] })
      toast({ title: "Status atualizado" })
    }
  })

  async function updateStatus(supplierSelected: SupplierUpdate, newStatus: "ATIVO" | "INATIVO") {
    await mutateAsync({ ...supplierSelected, status: newStatus })
  }

  return {
    updateStatus,
  }
}
