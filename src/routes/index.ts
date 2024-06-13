import { Application } from 'express'
import bodyParser from 'body-parser'
import categoriesRoutes from './categoriesRoutes'
import giftsRoutes from './giftsRoutes'

export default (app: Application) => {
  app.use(bodyParser.json(), categoriesRoutes, giftsRoutes)
}
