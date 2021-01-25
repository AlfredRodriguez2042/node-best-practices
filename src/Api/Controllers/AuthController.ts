import { Response, Request } from 'express'
import { IUserDto } from 'Api/Dto'

export class AuthController {
  private _authServices
  constructor({ AuthServices }: any) {
    this._authServices = AuthServices
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { body } = req

    const user: IUserDto = await this._authServices.login(body)
    return res.send({ user })
  }
}
