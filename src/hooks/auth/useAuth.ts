// hooks/use-auth.ts
import { AuthContext } from "@/context/authContext"
import { useContext } from "react"

export function useAuth() {
    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error("useAuth precisa ser usado dentro de um <AuthProvider>")
    }

    return context
}