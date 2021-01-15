import { Router, urlencoded, json } from 'express'
import cors from 'cors'
import compression from 'compression'
import statusMonitor from 'express-status-monitor'
import swaggerUI from 'swagger-ui-express'

export default ({ UserRouter, SwaggerDoc }: any) => {
  const router = Router()
  //console.log(SwaggerDoc)
  if (process.env.NODE_ENV !== 'production') {
    router.use(statusMonitor())
  }
  router.use(cors())
  router.use(compression())
  router.use(json())
  router.use(urlencoded({ extended: true }))

  router.use('/docs', swaggerUI.serve, swaggerUI.setup(SwaggerDoc))
  //router.use('/docs2', Swagger)
  router.use('/user', UserRouter)
  return router
}
