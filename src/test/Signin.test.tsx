import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, test } from "vitest";
import Signin from "../view/pages/Signin";
import useSignin from "../view/pages/Signin/useSignin";
import { wrapper } from "./utilsTests";

describe("<Signin>", () => {
  beforeEach(() => {
    render(<Signin />, { wrapper });
  })

  describe("state pending form", async () => {
    test("should render a loader");
    const { result } = renderHook(() => useSignin(), { wrapper });

    // Simulate action dispatch for state to be pending
    result.current.onSubmit({
      email: "matheusaurelio@gmail.com",
      password: "123456"
    })

    // Verify state is pending
    await waitFor(() => expect(result.current.isPending).toBe(true));
  });

  describe("state error form", () => {
    test("should show error message when fields was empty", async () => {
      const buttonSubmit = screen.getByRole("button", { name: /entrar/i });

      userEvent.click(buttonSubmit);

      await waitFor(() => {
        expect(screen.getByText(/email é obrigatório/i)).toBeInTheDocument();
        expect(screen.getByText(/senha é obrigatória/i)).toBeInTheDocument();
      });
    })

    test("should show error message when email is invalid", async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const buttonSubmit = screen.getByRole("button", { name: /entrar/i });

      userEvent.type(emailInput, "matheusaurelio");
      userEvent.click(buttonSubmit);

      await waitFor(() => {
        expect(screen.getByText(/email inválido/i)).toBeInTheDocument();
      });
    });

    /* test("should render a toast message error"); */
  });

  describe("state success form", () => {
    test("should type on fields email, password and submit form", async () => {
      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/senha/i);
      const buttonSubmit = screen.getByRole("button", { name: /entrar/i });

      userEvent.type(emailInput, "matheusaurelio@gmail.com");
      userEvent.type(passwordInput, "123456");
      userEvent.click(buttonSubmit);

      await waitFor(() => {
        expect(screen.queryByText(/email é obrigatório/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/senha é obrigatória/i)).not.toBeInTheDocument();
      });
    });

    /* test("should render a success message"); */
  });

  test("should have a input type email", () => {
    const inputEmailElement = screen.getByLabelText(/email/i);

    expect(inputEmailElement).toBeInTheDocument();
    expect(inputEmailElement).toHaveAttribute("type", "email");
  })

  test("should have a input type password", () => {
    const inputPasswordElement = screen.getByLabelText(/senha/i);

    expect(inputPasswordElement).toBeInTheDocument();
    expect(inputPasswordElement).toHaveAttribute("type", "password");
  })

  test("should have a submit button", () => {
    const titleForm = screen.getByText(/entre em sua conta/i);

    const buttonElement = screen.getByRole("button", { name: /entrar/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "submit");
    expect(titleForm).toBeVisible();
  });

  test("should have a link to signup page", () => {
    const linkElement = screen.getByRole("link", { name: /aqui/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/signup");
  });
});
