import { Router } from 'express'
const router = Router()
import multer from 'multer'
import multerConfig from '../config/multer'
import GiftsService from '../services/giftsService'

const upload = multer(multerConfig)
const giftsService = new GiftsService()

router.post(
  '/gifts/uploadImage',
  upload.single('image'),
  async (request, response) => {
    const { file } = request

    if (!file) {
      throw Error('Image not provided')
    }

    await giftsService.uploadImage(file)
    return response.send()
  }
)
// router.delete('/categories/:id', CategoriesController.delete)

export default router
