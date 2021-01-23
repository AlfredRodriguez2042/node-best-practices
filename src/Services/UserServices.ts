export class UserServices {
  public _userDomain
  constructor({ UserDomain }: any) {
    this._userDomain = UserDomain
  }
  async getUsers() {
    const users = await this._userDomain.getUsers()
    return users
  }
  async getUser(id: string) {
    const user = await this._userDomain.getUser(id)
    return user
  }
  async createUser(user: any) {
    const newUser = await this._userDomain.createUser(user)
    return newUser
  }
  async updateUser(user: any) {
    const updateUser = await this._userDomain.updateUser(user)
    return updateUser
  }
  async deleteUser(id: string) {
    const deleteUser = await this._userDomain.deleteUser(id)
    return deleteUser
  }
}
