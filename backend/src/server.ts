import { createServer } from 'http'

import app from './app'
import IniciateDatabase from './database'

IniciateDatabase()
const httpServer = createServer(app)

httpServer.listen(3333)
