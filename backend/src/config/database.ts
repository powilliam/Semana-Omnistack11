import { ConnectionOptions } from 'typeorm'
import { resolve } from 'path'

import { config } from 'dotenv'
import { Organization } from '@Entity/Organization'
import { Incident } from '@Entity/Incident'

config({
  path: resolve(__dirname, '..', '..', '.env')
})

export const DevelopmentOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.host,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  port: 5432,
  entities: [Organization, Incident],
  cli: {
    entitiesDir: resolve(__dirname, '..', 'database', 'entity')
  },
  uuidExtension: 'uuid-ossp'
}
