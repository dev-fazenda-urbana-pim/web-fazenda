import { User, UserSigninRequest, UserSignupRequest } from "../types/User"
import { httpClient } from "./httpClient"

class UsersService {
  async me() {
    const { data } = await httpClient.get<User>('/user/me')

    return data
  }

  async signup(request: UserSignupRequest) {
    const { data } = await httpClient.post('/user/register', request)

    return data
  }

  async signin(request: UserSigninRequest) {
    const { data } = await httpClient.post('/user/session', request)

    return data
  }
}

export default new UsersService()
