import { Users } from '../Entities/Users'
import { getRepository, getConnection } from 'typeorm'
export class UserRepository {
  async getUsers(): Promise<any[]> {
    return getRepository(Users).find({ relations: ['recipe'] })
  }
  async getUser(id: string) {
    return getRepository(Users).findOne({
      where: { id },
      relations: ['recipe'],
    })
  }
  async createUser(user: any): Promise<any> {
    const _user = await getRepository(Users).create(user)
    return getRepository(Users).save(_user)
  }
  async updateUser(user: any): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .update(Users)
      .set({ email: user.email })
      .where('id= :id', { id: user.id })
      .execute()

    return true
  }
  async deleteUser(id: any): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Users)
      .where('id= :id', { id })
      .execute()
    return true
  }
}
