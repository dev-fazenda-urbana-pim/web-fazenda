import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { TableSuppliers } from "@/view/pages/Fornecedores/components/TableSuppliers";

export default function Fornecedores() {
  return (
    <>
      <Header />

      <>
        <Navbar />

        <TableSuppliers />
      </>
    </>
  )
}
