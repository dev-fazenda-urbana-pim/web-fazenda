import { ButtonLoading } from "@/components/ButtonLoading";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

// [x] TODO: O ButtonLoading está renderizado na tela com o título Entrar?

// [x] TODO: O ButtonLoading está renderizado na tela com tipo submit?

describe("<ButtonLoading>", () => {
  // Antes de rodar os testes o botão deve estar renderizado
  beforeEach(() => {
    render(
      <ButtonLoading isLoading={false} type="submit">
        Entrar
      </ButtonLoading>
    );
  });

  test("should be render button title", () => {
    expect(screen.getByText("Entrar")).toBeInTheDocument();
  });

  test("should be type submit", () => {
    expect(screen.getByText("Entrar")).toHaveAttribute("type", "submit");
  });
})
