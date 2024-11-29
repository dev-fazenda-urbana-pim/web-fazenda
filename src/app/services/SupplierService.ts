import { SupplierRequest } from "../types/Supplier"
import { httpClient } from "./httpClient"

class SupplierService {
  async create(request: SupplierRequest) {
    const { data } = await httpClient.post('/suppliers', request)

    return data
  }
}

export default new SupplierService()
