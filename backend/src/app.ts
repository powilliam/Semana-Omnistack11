import 'reflect-metadata'
import * as express from 'express'

import Routes from '@Routes/index'

const app = express()

app.use(express.json())
app.use(Routes)

export default app
