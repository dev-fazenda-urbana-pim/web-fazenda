import { AuthProvider } from "@/app/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    }
  }
});

export const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
)
