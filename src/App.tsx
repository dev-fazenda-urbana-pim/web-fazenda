import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { Toaster } from './components/ui/toaster'
import { Router } from "./routes"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
