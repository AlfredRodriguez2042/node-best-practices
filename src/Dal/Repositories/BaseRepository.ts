import { getConnection, getRepository } from 'typeorm'

export class BaseRepository {
  private _entity

  constructor(Entity: any) {
    this._entity = Entity
  }
  async getAll(options?: {}): Promise<any[]> {
    return getRepository(this._entity).find(options)
  }
  async get(options?: {}) {
    return getRepository(this._entity).findOne(options)
  }
  async create(entity: any): Promise<any> {
    const _entity = await getRepository(this._entity).create(entity)
    return getRepository(this._entity).save(_entity)
  }
  async update(entity: any): Promise<any> {
    const { id, email } = entity
    await getConnection()
      .createQueryBuilder()
      .update(this._entity)
      .set({ email })
      .where('id= :id', { id })
      .execute()

    return true
  }
  async delete(id: any): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(this._entity)
      .where('id= :id', { id })
      .execute()
    return true
  }
}
