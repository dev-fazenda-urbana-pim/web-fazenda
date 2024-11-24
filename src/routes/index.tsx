import Clientes from "@/view/pages/Clientes";
import Estoque from "@/view/pages/Estoque";
import Financeiro from "@/view/pages/Financeiro";
import Fornecedores from "@/view/pages/Fornecedores";
import Home from "@/view/pages/Home";
import Logistica from "@/view/pages/Logistica";
import Producao from "@/view/pages/Producao";
import Signin from "@/view/pages/Signin";
import Signup from "@/view/pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Private routes */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/fornecedores" element={<Fornecedores />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/logistica" element={<Logistica />} />
          <Route path="/clientes" element={<Clientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
