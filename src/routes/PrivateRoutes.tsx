import useAuth from '@/app/hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
  const { signedIn } = useAuth()

  if (!signedIn) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}
