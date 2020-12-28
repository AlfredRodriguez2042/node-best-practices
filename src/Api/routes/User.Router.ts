import { Router } from 'express'

export default ({ UserController }:any) => {


  const router = Router()

  router.get('/', UserController.getUsers.bind(UserController))
  router.post('/', UserController.createUsers.bind(UserController))

  return router
}
