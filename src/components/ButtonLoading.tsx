import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

interface ButtonLoadingProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isLoading: boolean
}

export function ButtonLoading({ type, children, isLoading, className }: ButtonLoadingProps) {
  return (
    <Button
      type={type}
      disabled={isLoading}
      className={className}
    >
      {isLoading ? <Loader2 className="animate-spin" role="status" /> : children}
    </Button>
  )
}
