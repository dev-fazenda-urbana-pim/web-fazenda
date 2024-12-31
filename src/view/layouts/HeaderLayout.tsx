import Header from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export function HeaderLayout() {
  return (
    <React.Fragment>
      <Header />

      <div>
        <Navbar />
        <Outlet />
      </div>
    </React.Fragment>
  )
}
