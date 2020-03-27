import 'reflect-metadata'
import * as express from 'express'
import * as cors from 'cors'

import Routes from '@Routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(Routes)

export default app
