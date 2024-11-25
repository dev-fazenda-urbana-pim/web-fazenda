export interface UserSignupRequest {
  name: string
  email: string
  password: string
}

type Roles = "Admin" | "Fornecedor" | "Funcionario"

export interface User {
  id: string
  name: string
  email: string
  role: Roles
}

export type UserSigninRequest = Pick<UserSignupRequest, 'email' | 'password'>
