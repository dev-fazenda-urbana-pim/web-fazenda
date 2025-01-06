export type Supplier = {
  id: string;
  razaoSocial: string;
  cnpj: string;
  nomeFantasia: string;
  endereco: string;
  uf: string;
  status: string;
  contato: string;
};

export interface SupplierRequest {
  address: string;
  cnpj: string;
  socialReason: string;
  tradeName: string;
  cep: string;
  city: string;
  uf: string;
  neighborhood: string;
  phone: string;
  email: string;
  representativeName: string;
  complement?: string;
}

export interface SupplierResponse {
  id: string;
  razao_social: string;
  cnpj: string;
  uf: string;
  status: "ATIVO" | "INATIVO";
  admin_FazendaId?: string;
};

export interface SupplierUpdate {
  id: string;
  razao_social: string,
  cnpj: string,
  uf: string,
  status: "ATIVO" | "INATIVO",
}
