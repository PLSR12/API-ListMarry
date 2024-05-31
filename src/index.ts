import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { resolve } from 'path'
import errorHandler from './middlewares/errorHandler'
import { associations } from './db/models/associations'

dotenv.config()

const app = express()

routes(app)
app.use(errorHandler)
associations()

app.listen(process.env.APP_PORT || 3100, () => {
  console.log(`${process.env.APP_NAME} running on port ${process.env.APP_PORT}`)
})

app.get('/', () => {
  console.log('to no ar')
})

export default app
