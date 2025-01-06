import { SupplierRequest, SupplierResponse, SupplierUpdate } from "../types/Supplier"
import { httpClient } from "./httpClient"

class SupplierService {
  async create(request: SupplierRequest) {
    const { data } = await httpClient.post('/suppliers', request)

    return data
  }

  async listAll() {
    const { data } = await httpClient.get<SupplierResponse[]>('/suppliers')

    return data
  }

  async updateStatus({ id, ...request }: SupplierUpdate) {
    const { data } = await httpClient.patch(`/suppliers/${id}`, request)

    return data
  }
}

export default new SupplierService()
