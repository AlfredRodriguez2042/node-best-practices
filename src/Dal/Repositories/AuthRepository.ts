import { Users } from '../Entities/Users'
import { getRepository } from 'typeorm'
import { compare } from 'bcrypt'
export class AuthRepository {
  async login(user: any): Promise<any> {
    const { email, password } = user
    const _user = await getRepository(Users).findOne({ where: { email } })
    if (!_user) {
      throw new Error('invalid email/password, try again')
    }
    const IsMatch = await compare(password, _user.password)

    if (!IsMatch) {
      throw new Error('invalid email/password, try again')
    }
    return _user
  }
  logOut() {}
}
