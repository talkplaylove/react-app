import jwt from "jsonwebtoken"
import { createContext, useContext, useState } from "react"
const AuthContext = createContext()

function useAuthProvider() {
  const [accessToken, setAccessToken] = useState(null)
  return { accessToken, setAccessToken }
}

export function AuthProvider({ children }) {
  const value = useAuthProvider()
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export function useUser() {
  const { accessToken } = useAuth()
  return jwt.decode(accessToken)
}