import { useQuery } from '@tanstack/react-query'
import { createContext, useCallback, useEffect, useState } from 'react'
import { storage } from '../config/storage'
import UserService from '../services/UserService'
import { User } from '../types/User'

export interface AuthContextProps {
  user: User | undefined
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

  const { data, isError } = useQuery({
    queryKey: ['user', 'me'],
    queryFn: async () => UserService.me(),
    enabled: signedIn,
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(storage.ACCESS_TOKEN, accessToken)

    setIsSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(storage.ACCESS_TOKEN)

    setIsSignedIn(false)
  }, [])

  useEffect(() => {
    if (isError) {
      signout()
    }
  }, [isError, signout])

  return (
    <AuthContext.Provider
      value={{
        user: data,
        signedIn,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
