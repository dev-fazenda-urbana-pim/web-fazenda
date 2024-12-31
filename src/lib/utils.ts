import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatToReal(value: number | string) {
  if (typeof value === "string") {
    return parseFloat(value)
  }

  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
}
