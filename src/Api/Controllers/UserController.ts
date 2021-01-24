import { IUserDto } from '../Dto'
import { Request, Response } from 'express'

export class UserController {
  private _userServices
  constructor({ UserServices }: any) {
    this._userServices = UserServices
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const _user = await this._userServices.getUser(id)
      if (!_user) {
        throw new Error('The User doesnt exits')
      }

      return res.status(200).json({ user: _user })
    } catch (error) {
      return res.status(500).send(error)
    }
  }

  async getUsers(req: Request, res: Response): Promise<Response> {
    try {
      const _users = await this._userServices.getUsers()
      if (!_users.length) {
        return res.status(204).json({ message: 'NO CONTENT' })
      }

      return res.status(200).json({ users: _users })
    } catch (error) {
      return res.status(500).send(error)
    }
  }
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { body } = req
      const user: IUserDto = await this._userServices.createUser(body)
      return res.send({ user })
    } catch (error) {
      return res.status(500).send(error)
    }
  }
  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body
      const _user = await this._userServices.updateUser(body)
      return res.status(200).send(_user)
    } catch (error) {
      return res.status(500).send(error)
    }
  }
  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const _user = await this._userServices.deleteUser(id)
      return res.status(200).send(_user)
    } catch (error) {
      return res.status(500).send(error)
    }
  }
}
