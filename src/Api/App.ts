import express, { Application } from 'express'
import dotEnv from 'dotenv'
import { Logger } from './Utils/Logger'
dotEnv.config()

const PORT = process.env.BACKEND_PORT || 4000
export class App {
  private app: Application
  public _security
  public _router: any

  constructor({ router, security }: any) {
    this.app = express()
    this._security = security
    this._router = router
    this.middleware()
    this.routes()
  }
  async middleware() {
    this._security.Middlewares(this.app)
  }
  routes() {
    this.app.use('/api', this._router)
  }
  async start() {
    this.app.listen(PORT, () => {
      try {
        Logger.info(`Express server is running on port ${PORT}`, null, true)
      } catch (error) {
        Logger.error(error)
      }
    })
  }
}
