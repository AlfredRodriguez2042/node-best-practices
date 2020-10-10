import { Router, Response, Request } from 'express'

export default ({ UserController }) => {
  console.log('router')

  const router = Router()

  router.get('/', UserController.show)

  return router
}
