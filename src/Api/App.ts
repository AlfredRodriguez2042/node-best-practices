import express, { Application } from 'express'
import dotEnv from 'dotenv'
dotEnv.config()

const PORT = process.env.BACKEND_PORT || 4000
export class App {
  private app: Application

  constructor({ router }) {
    this.app = express()
    this.app.use('/api', router)
  }

  async start() {
    return await this.app.listen(PORT, () => {
      console.log(`App listen on port ${PORT}`)
    })
  }
}
