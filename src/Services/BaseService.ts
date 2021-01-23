export class BaseServices {
  public _entityDomain
  constructor(EntityDomain: any) {
    this._entityDomain = EntityDomain
  }
  async get(id: string) {
    const users = await this._entityDomain.get(id)
    return users
  }
  async getAll(id: string) {
    const user = await this._entityDomain.getAll()
    return user
  }
  async create(user: any) {
    const newUser = await this._entityDomain.create(user)
    return newUser
  }
  async update(user: any) {
    const updateUser = await this._entityDomain.update(user)
    return updateUser
  }
  async delete(id: string) {
    const deleteUser = await this._entityDomain.delete(id)
    return deleteUser
  }
}
