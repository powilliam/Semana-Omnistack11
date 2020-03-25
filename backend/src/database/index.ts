import { createConnection, Connection, ConnectionOptions } from 'typeorm'

export default async function IniciateDatabase(options: ConnectionOptions): Promise<Connection> {
  return await createConnection(options)
}
