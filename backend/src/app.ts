import 'reflect-metadata'
import * as express from 'express'
import * as cors from 'cors'
import { errors } from 'celebrate'

import Routes from '@Routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(Routes)
app.use(errors())

export default app
