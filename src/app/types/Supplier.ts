export interface SupplierRequest {
  address: string;
  cnpj: string;
  companyName: string;
  tradeName: string;
  cep: string;
  city: string;
  state: string;
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
  status: string;
  admin_FazendaId?: string;
};
