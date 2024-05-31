import { Router } from 'express'
import CategoriesController from '../controllers/categories/categoriesController'
const router = Router()

router.get('/categories', CategoriesController.getAll)
router.get('/categories/:id', CategoriesController.getOne)
router.post('/categories', CategoriesController.create)
router.put('/categories/:id', CategoriesController.update)
router.delete('/categories/:id', CategoriesController.delete)

export default router
