export type Payment = {
  id: string;
  Código: string;
  Fornecedor: string;
  Itens: string;
  Peso: number;
  Status: string;
};

export const products: Payment[] = [
  {
    id: "m5gr84i9",
    Código: "02.370.284/0001-33",
    Fornecedor: "AppleFarms",
    Itens: "Sementes A",
    Peso: 1.5,
    Status: "sem estoque",
  },
  {
    id: "3u1reuv4",
    Código: "02.370.284/0001-34",
    Fornecedor: "AquaPure Solutios",
    Itens: "Sementes B",
    Peso: 2.0,
    Status: "Alto",
  },
  {
    id: "derv1ws0",
    Código: "02.370.284/0001-35",
    Fornecedor: "AquaTech",
    Itens: "Sementes C",
    Peso: 1.2,
    Status: "Baixo",
  },
  {
    id: "5kma53ae",
    Código: "02.370.284/0001-36",
    Fornecedor: "Sementes VerdeVida",
    Itens: "Sementes D",
    Peso: 3.0,
    Status: "sem estoque",
  },
  {
    id: "bhqecj4p",
    Código: "02.370.284/0001-37",
    Fornecedor: "AquaLife",
    Itens: "Sementes E",
    Peso: 1.8,
    Status: "Alto",
  },
  {
    id: "k2d1g8n0",
    Código: "02.370.284/0001-38",
    Fornecedor: "Nature Seeds",
    Itens: "Sementes F",
    Peso: 1.6,
    Status: "Baixo",
  },
  {
    id: "p5w3t2z1",
    Código: "02.370.284/0001-39",
    Fornecedor: "Plant Power",
    Itens: "Sementes G",
    Peso: 2.5,
    Status: "sem estoque",
  },
  {
    id: "u9g2h8j3",
    Código: "02.370.284/0001-40",
    Fornecedor: "Greenhouse Co.",
    Itens: "Sementes H",
    Peso: 4.0,
    Status: "Alto",
  },
  {
    id: "y1u3r6t8",
    Código: "02.370.284/0001-41",
    Fornecedor: "Eco Seeds",
    Itens: "Sementes I",
    Peso: 2.3,
    Status: "Baixo",
  },
  {
    id: "t6v9h4k2",
    Código: "02.370.284/0001-42",
    Fornecedor: "Seed Bank",
    Itens: "Sementes J",
    Peso: 1.1,
    Status: "sem estoque",
  },
  {
    id: "a2e4v6q8",
    Código: "02.370.284/0001-43",
    Fornecedor: "Flora Seeds",
    Itens: "Sementes K",
    Peso: 2.4,
    Status: "Alto",
  },
  {
    id: "h5f2b8r7",
    Código: "02.370.284/0001-44",
    Fornecedor: "Nature's Best",
    Itens: "Sementes L",
    Peso: 3.2,
    Status: "Baixo",
  },
  {
    id: "j8r3w6m2",
    Código: "02.370.284/0001-45",
    Fornecedor: "Harvest Seeds",
    Itens: "Sementes M",
    Peso: 2.0,
    Status: "sem estoque",
  },
  {
    id: "z2h8g9n1",
    Código: "02.370.284/0001-46",
    Fornecedor: "Green Thumb",
    Itens: "Sementes N",
    Peso: 1.7,
    Status: "Alto",
  },
];
