import express, { Application } from 'express'
import dotEnv from 'dotenv'
import { Logger } from './Utils/Logger'
dotEnv.config()

const PORT = process.env.BACKEND_PORT || 4000
export class App {
  private app: Application
  public _security

  constructor({ router, security }: any) {
    this.app = express()
    this.app.use('/api', router)
    this._security = security
    this.middleware()
  }
  async middleware() {
    this._security.Middlewares(this.app)
  }
  async start() {
    this.app.listen(PORT, () => {
      Logger.info(`Express server is running on port ${PORT}`, null, true)
    })
  }
}
