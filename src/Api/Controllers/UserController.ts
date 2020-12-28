import { IUserDto } from '../Dto'
import {  Request, Response } from 'express'

export class UserController {
  public _userServices
  constructor({UserServices}:any) {

    this.show = this.show.bind(this)
    this._userServices = UserServices
  }

  async show(req: Request, res: Response): Promise<Response> {
    console.log('controler')

    return res.json({ message: 'hola mubndo' })
  }

  async getUsers(req: Request, res: Response): Promise<any>{
    const users = await this._userServices.getUsers()
    return res.send({users})
  }
  async createUsers(req: Request, res: Response): Promise<any>{
    const {body}=req

    const user:IUserDto = await this._userServices.createUsers(body)
    return res.send({user})
  }
}
