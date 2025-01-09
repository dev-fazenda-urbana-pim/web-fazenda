export interface Product {
  id: string
  name: string
  description: string
  weight: string | number
  price: string | number
  quantity: string | number
  image: string
}

export type ProductCreateRequest = Omit<Product, 'id'>
