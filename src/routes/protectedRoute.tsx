import AuthLayout from "@/layout/authLayout"
import { Navigate, Outlet } from "react-router-dom"
// import { useAuth } from '@/hooks/useAuth'

export function ProtectedRoute() {
  const isAuthenticated = true
  return isAuthenticated ? (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ) : (
    <Navigate to="/login" replace />
  )
}
