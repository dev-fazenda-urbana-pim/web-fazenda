import { Product, ProductCreateRequest } from "../types/Product"
import { httpClient } from "./httpClient"

class ProductService {
  async listAll() {
    const { data } = await httpClient.get<Product[]>('/products')

    return data
  }

  async create(product: ProductCreateRequest) {
    const { data } = await httpClient.post('/products', product)

    return data
  }

  async remove(productId: string) {
    await httpClient.delete(`/products/${productId}`)
  }
}

export default new ProductService()
