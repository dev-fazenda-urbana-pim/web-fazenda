type SupplierField =
  | "email"
  | "address"
  | "uf"
  | "cnpj"
  | "socialReason"
  | "tradeName"
  | "cep"
  | "city"
  | "neighborhood"
  | "phone"
  | "representativeName"
  | "complement";

export const fieldsSuppliers: { field: SupplierField; label: string }[] = [
  { field: "socialReason", label: "Razão Social" },
  { field: "cnpj", label: "CNPJ" },
  { field: "tradeName", label: "Nome Fantasia" },
  { field: "cep", label: "CEP" },
  { field: "address", label: "Endereço" },
  { field: "complement", label: "Complemento" },
  { field: "city", label: "Cidade" },
  { field: "uf", label: "UF" },
  { field: "neighborhood", label: "Bairro" },
  { field: "phone", label: "Telefone" },
  { field: "email", label: "E-mail" },
  { field: "representativeName", label: "Nome do Representante" },
];
