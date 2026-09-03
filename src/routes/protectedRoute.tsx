import { useAuth } from "@/hooks/auth/useAuth"
import AuthLayout from "@/layout/authLayout"
import { Navigate, Outlet } from "react-router-dom"
// import { useAuth } from '@/hooks/useAuth'

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <>Loading...</>
  }
  return isAuthenticated ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to="/login" replace />
  )
}
