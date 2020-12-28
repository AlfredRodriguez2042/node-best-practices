import { AwilixContainer } from 'awilix'
import 'reflect-metadata'
import InitContainer from './Api/container'
import { createTypeormConn } from './Dal/Conection'

const StartDB = async () => {
 try {
  await createTypeormConn()
  const dbConnection: AwilixContainer = await InitContainer.resolve('server')

  return dbConnection.start()
 } catch (error) {
   console.log(error)
 }
}
StartDB()
