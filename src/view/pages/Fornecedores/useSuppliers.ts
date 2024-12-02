import { useQuery } from "@tanstack/react-query";
import SupplierService from "../../../app/services/SupplierService";

export default function useSuppliers() {
  const { data, isPending } = useQuery({
    queryKey: ['suppliers'],
    queryFn: SupplierService.listAll
  })

  return {
    suppliers: data,
    isPending
  }
}
