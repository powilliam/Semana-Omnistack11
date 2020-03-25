import { createServer } from 'http'

import { DevelopmentOptions } from '@Config/database'
import IniciateDatabase from '@Database/index'

import app from './app'

IniciateDatabase(DevelopmentOptions)
const httpServer = createServer(app)
httpServer.listen(3333)
