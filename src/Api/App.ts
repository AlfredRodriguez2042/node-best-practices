import express, { Application } from 'express'
import 'reflect-metadata'
import { createTypeormConn } from './db'
import dotEnv from 'dotenv'
dotEnv.config()

export class App {
  private app: Application

  constructor({ router }) {
    this.app = express()
    this.app.use('/api', router)
  }

  async start() {
    await createTypeormConn()
    console.log(process.env.NODE_ENV)
    return await this.app.listen(4000, () => {
      console.log(`App listen on port 4000`)
    })
  }
}
