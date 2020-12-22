import { Router, Response, Request } from 'express'

export default ({ UserController }) => {


  const router = Router()

  router.get('/', UserController.show)

  return router
}
