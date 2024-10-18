import Header from "@/components/Header"
import { TableSuppliers } from "@/view/pages/Fornecedores/components/TableSuppliers"
import { Navbar } from "@/components/Navbar";


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
