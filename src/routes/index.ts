import { Application } from 'express'
import bodyParser from 'body-parser'
import categoriesRoutes from './categoriesRoutes'

export default (app: Application) => {
  app.use(bodyParser.json(), categoriesRoutes)
}
