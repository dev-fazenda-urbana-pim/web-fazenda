import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { TableStock } from "@/view/pages/Estoque/components/TableStock";


export default function Fornecedores() {
  return (
    <>
      <Header />

      <>
        <Navbar />
        <TableStock />
      </>
    </>
  )
}
