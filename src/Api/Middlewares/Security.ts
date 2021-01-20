import { json, urlencoded } from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import csurf from 'csurf'
import morgan from 'morgan'
import Session from 'express-session'
import { stream } from '../Utils/Logger'
import { internalServerError } from '../Utils/Errors'

export class SecurityApp {
  // public app: Application
  constructor() {
    //   this.app = express()
  }
  Middlewares(app: any) {
    if (process.env.NODE_ENV !== 'production') {
      app.use(morgan('dev'))
    } else {
      app.use(morgan('combined', { stream }))
      app.use(helmet())
    }
    app.use(json({ limit: '50mb' }))
    app.use(
      urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 })
    )
    app.use(cookieParser(process.env.SESSION_SECRET))
    app.use(
      Session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        },
      })
    )

    if (process.env.NODE_ENV === 'production' && process.env.CORS === 'true') {
      app.use(csurf({ cookie: true }))
    }

    app.use((req: any, res: any, next: any) => {
      // write the csrf cookie in the response in the ‘XSRF-TOKEN’ field
      // The client must pass 'x-xsrf-token' or 'x-csrf-token'
      // or 'xsrf-token' or 'csrf-token' in the header with the value set
      if (
        process.env.NODE_ENV === 'production' &&
        process.env.CORS === 'true'
      ) {
        res.cookie('XSRF-TOKEN', req.csrfToken())
      }

      next()
    })
    app.use(internalServerError)
  }
}
