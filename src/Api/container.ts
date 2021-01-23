import {
  asClass,
  createContainer,
  asFunction,
  asValue,
  AwilixContainer,
} from 'awilix'
import { App } from './App'
import { UserController } from './Controllers'
import routes from './Routes'
import UserRouter from './Routes/User.Router'
import swaggerDoc from './Utils/Swagger.json'
import { Server } from './Server'
import { UserServices } from '../Services/UserServices'
import { UserRepository } from '../Dal/Repositories'
import { SecurityApp } from './Middlewares/Security'
import { UserDomain } from '../Domain/UserDomain'

const container: AwilixContainer = createContainer()

// Aplication Layer
container.register({
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
  security: asClass(SecurityApp).singleton(),

  SwaggerDoc: asValue(swaggerDoc),
  //Swagger: asValue(swagger),
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
  UserDomain: asClass(UserDomain).singleton(),
})

// Data Layer (dal)
container.register({
  UserRepository: asClass(UserRepository).singleton(),
  // UserEntity:asClass(UserEntity).singleton()
})

// if(dbConnection){
//   container.register({
//     typeOrmConnection:asFunction(()=>dbConnection,{lifetime:Lifetime.TRANSIENT})
//   })
// }

export default container
