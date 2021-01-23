import { IUser } from './Models/Iuser'

export class UserDomain {
  public readonly id: string
  public name: string
  public email: string
  public password: string
  private _userRepository
  //constructor(props:Omit<UserDomain,"id">,id?:string){}
  constructor({ UserRepository }: any) {
    this._userRepository = UserRepository
  }
  async getUsers(): Promise<any[]> {
    const _users = await this._userRepository.getUsers()
    // quitar el password
    return _users
  }
  async getUser(id: string): Promise<any> {
    const _user = await this._userRepository.getUser(id)
    return _user
  }
  async createUser(user: IUser): Promise<any> {
    const _user = this._userRepository.createUser(user)
    return _user
  }
  async updateUser(user: IUser): Promise<any> {
    const _user = this._userRepository.updateUser(user)
    return _user
  }
  async deleteUser(id: string): Promise<any> {
    const _user = this._userRepository.deleteUser(id)
    return _user
  }
}
