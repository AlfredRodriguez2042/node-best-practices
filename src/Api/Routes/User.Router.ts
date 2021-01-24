import { Router } from 'express'

export default ({ UserController }: any) => {
  const router = Router()

  router.get('/', UserController.getUsers.bind(UserController))
  router.get('/:id', UserController.getUser.bind(UserController))
  router.post('/', UserController.createUser.bind(UserController))

  return router
}
