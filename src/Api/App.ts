import express, { Application } from 'express'
import dotEnv from 'dotenv'
import { Logger } from './Utils/Logger'
import { httpsRedirect, wwwRedirect } from './Utils/Redirect'
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
  private async middleware() {
    this._security.Middlewares(this.app)
  }
  private routes() {
    this.app.use('/*', httpsRedirect())
    this.app.use('/*', wwwRedirect())
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
