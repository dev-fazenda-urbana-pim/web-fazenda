import { createContext, useCallback, useState } from 'react'
import { storage } from '../config/storage'

export interface AuthContextProps {
  signedIn: boolean
  signin(token: string): void
  signout(): void
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setIsSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(storage.ACCESS_TOKEN)

    return !!storedAccessToken
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(storage.ACCESS_TOKEN, accessToken)

    setIsSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(storage.ACCESS_TOKEN)

    setIsSignedIn(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
