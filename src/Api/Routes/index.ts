import { Router, urlencoded, json } from 'express'
import cors from 'cors'
import compression from 'compression'
import statusMonitor from 'express-status-monitor'
import swaggerUI from 'swagger-ui-express'
import HealthCheck from '../Utils/HealthCheck'
import { Prometheus } from '../Utils/Prometheus'
//import { swaggerSpec } from '../Utils/Swagger'

export default ({ UserRouter, SwaggerDoc }: any) => {
  const router = Router()

  if (process.env.NODE_ENV !== 'production') {
    // path /status
    router.use(statusMonitor())
  }
  router.use(cors())
  router.use(compression())
  router.use(json())
  router.use(urlencoded({ extended: true }))

  router.use('/metrics', Prometheus)
  router.use('/healthcheck', HealthCheck)
  router.use('/docs', swaggerUI.serve, swaggerUI.setup(SwaggerDoc))
  // router.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
  router.use('/user', UserRouter)
  return router
}
