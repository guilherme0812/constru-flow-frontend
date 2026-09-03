import { useAuth } from "@/hooks/auth/useAuth"
import AuthLayout from "@/layout/authLayout"
import { Navigate } from "react-router-dom"

export function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <>Loading...</>
  }
  return isAuthenticated ? <AuthLayout /> : <Navigate to="/login" replace />
}
