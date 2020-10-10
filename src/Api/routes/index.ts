import { Router } from 'express'

export default ({ UserRouter }) => {
  const router = Router()
  router.use('/user', UserRouter)
  return router
}
