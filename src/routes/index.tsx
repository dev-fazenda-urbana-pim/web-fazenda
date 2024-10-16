import Fornecedores from "@/view/pages/Fornecedores";
import Home from "@/view/pages/Home";
import Signin from "@/view/pages/Signin";
import Signup from "@/view/pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
      </Routes>
    </BrowserRouter>
  )
}
