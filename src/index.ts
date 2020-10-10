import { AwilixContainer } from 'awilix'
import InitContainer from './Api/container'

const StartDB = async () => {
  const dbConnection: AwilixContainer = await InitContainer.resolve('server')

  return dbConnection.start()
}
StartDB()
