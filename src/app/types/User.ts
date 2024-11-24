export interface UserSignupRequest {
  name: string
  email: string
  password: string
}

export type UserSigninRequest = Pick<UserSignupRequest, 'email' | 'password'>
