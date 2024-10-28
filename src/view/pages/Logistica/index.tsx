import Header from "@/components/Header"
import { TableSuppliers } from "@/view/pages/Logistica/components log/TableSuppliers"
import { Navbar } from "@/components/Navbar";

export default function Logistica(){

  return(
    <>
      <Header />
      <>
    <Navbar />

      <TableSuppliers />
      </>
    </>
  )
}
