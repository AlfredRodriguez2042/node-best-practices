import { Response, Request } from 'express'
import { IUserDto } from 'Api/Dto'

export class AuthController {
  private _authServices
  constructor({ AuthServices }: any) {
    this._authServices = AuthServices
  }
  async singUp(req: Request, res: Response): Promise<any> {
    const { body } = req

    const user: IUserDto = await this._authServices.createUsers(body)
    return res.send({ user })
  }

  async login(req: Request, res: Response): Promise<any> {
    const { body } = req

    const user: IUserDto = await this._authServices.login(body)
    return res.send({ user })
  }
}
