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
import {UserServices} from "../Services/UserServices"
import {UserRepository}  from "../Dal/Repositories"

const container: AwilixContainer = createContainer()

 // Aplication Layer
container.register({
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
  router: asFunction(routes).singleton(),
  UserRouter: asFunction(UserRouter).singleton(),
  UserController: asClass(UserController).singleton(),
})

// Service Layer
container.register({
  UserServices: asClass(UserServices).singleton(),

})

// Domain Layer
container.register({
})

// Data Layer (dal)
container.register({
  UserRepository:asClass(UserRepository).singleton(),
 // UserEntity:asClass(UserEntity).singleton()
})

// if(dbConnection){
//   container.register({
//     typeOrmConnection:asFunction(()=>dbConnection,{lifetime:Lifetime.TRANSIENT})
//   })
// }

export default container
