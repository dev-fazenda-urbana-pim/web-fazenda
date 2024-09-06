import Home from "@/view/pages/Home";
import Signin from "@/view/pages/Signin";
import Signup from "@/view/pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  )
}
