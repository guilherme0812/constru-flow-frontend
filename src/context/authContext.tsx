import {
  type LoginBodyType,
  type UserDataType,
  getMe,
  login,
} from "@/api/authService"
import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from "react"

export const TOKEN_STORAGE_KEY = "@constru-flow:token"

interface AuthContextValue {
  user: UserDataType | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: LoginBodyType) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDataType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromStorage() {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY)

      if (!token) {
        setIsLoading(false)
        return
      }

      try {
        const currentUser = await getMe()
        setUser(currentUser)
      } catch {
        // token inválido/expirado
        localStorage.removeItem(TOKEN_STORAGE_KEY)
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserFromStorage()
  }, [])

  const handleLogin = useCallback(async (body: LoginBodyType) => {
    const { user, accessToken } = await login(body)
    setUser(user)
    localStorage.setItem(TOKEN_STORAGE_KEY, accessToken)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login: handleLogin,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
