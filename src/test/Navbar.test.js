import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar"

describe("Navbar Component", () => {
  it("should render the menu trigger button", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Verifica se o botão do menu está presente
    const menuButton = screen.getByRole("button", { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("should open the menu when the button is clicked", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Simula o clique no botão do menu
    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Verifica se o título do menu está visível
    const menuTitle = screen.getByText(/módulos/i);
    expect(menuTitle).toBeInTheDocument();
  });

  it("should render all navigation items", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Simula o clique no botão do menu para abrir o menu
    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Verifica a presença dos itens de navegação
    const navItems = screen.getAllByRole("listitem");
    expect(navItems.length).toBeGreaterThan(0); // Deve conter itens
  });

  it("should render the footer with support information", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Simula o clique no botão do menu para abrir o menu
    const menuButton = screen.getByRole("button", { name: /menu/i });
    fireEvent.click(menuButton);

    // Verifica a presença das informações de suporte
    expect(screen.getByText(/suporte/i)).toBeInTheDocument();
    expect(screen.getByText(/urbanino@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\(12\) 99999 - 0000/i)).toBeInTheDocument();
  });
});
