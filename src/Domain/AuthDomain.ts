import { IUser } from './Models/Iuser'

export class AuthDomain {
  private _authDomain
  constructor({ AuthRepository }: any) {
    this._authDomain = AuthRepository
  }
  async login(user: IUser): Promise<any> {
    const _user = this._authDomain.login(user)
    return
  }
}
