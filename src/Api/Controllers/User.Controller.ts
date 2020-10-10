import { NextFunction, Request, Response, Router } from 'express'

export class UserController {
  constructor() {
    this.show = this.show.bind(this)
  }

  async show(req: Request, res: Response): Promise<Response> {
    console.log('controler')

    return res.json({ message: 'hola mubndo' })
  }
}
