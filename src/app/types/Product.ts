export interface Product {
  id: string
  nome: string
  descricao: string
  peso: string | number
  preco: string | number
  qtd: string | number
  imagem: string
}

export type ProductCreateRequest = Omit<Product, 'id'>
