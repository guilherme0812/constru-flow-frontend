import { Routes, Route } from "react-router-dom"
import MainLayout from "@/layout/mainLayout"
import DemandsPage from "@/pages/demands"
import { ProtectedRoute } from "./protectedRoute"
import LoginPage from "@/pages/login"

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/demands" element={<DemandsPage />} />
          <Route path="/dashboard" element={<DemandsPage />} />
        </Route>
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
