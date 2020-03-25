import { createConnection, Connection } from 'typeorm'
import { resolve } from 'path'
import { Organization } from './entity/Organization'
import { Incident } from './entity/Incident'

export default async function IniciateDatabase(): Promise<Connection> {
  return await createConnection({
    type: 'postgres',
    username: 'week11',
    password: 'week11',
    database: 'week11_backend',
    port: 5432,
    entities: [Organization, Incident],
    synchronize: true,
    cli: {
      entitiesDir: resolve(__dirname, 'entity')
    }
  })
}
