import Fornecedores from "@/view/pages/Fornecedores";
import Home from "@/view/pages/Home";
import Producao from "@/view/pages/Producao";
import Signin from "@/view/pages/Signin";
import Signup from "@/view/pages/Signup";
import Estoque from "@/view/pages/Estoque";
import Financeiro from "@/view/pages/Financeiro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/producao" element={<Producao />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Routes>
    </BrowserRouter>
  )
}
