import {
  asClass,
  createContainer,
  asFunction,
  asValue,
  AwilixContainer,
} from 'awilix'
//import { Connection } from 'typeorm'
import { App } from './App'
import { UserController } from './Controllers'
import routes from './routes'
import UserRouter from './routes/User.Router'
import { Server } from './Server'

const container: AwilixContainer = createContainer()

container.register({
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
})

container.register({
  router: asFunction(routes).singleton(),
})

container.register({
  UserRouter: asFunction(UserRouter).singleton(),
})
container.register({
  UserController: asClass(UserController).singleton(),
})
// if(dbConnection){
//   container.register({
//     typeOrmConnection:asFunction(()=>dbConnection,{lifetime:Lifetime.TRANSIENT})
//   })
// }

export default container
