import { NextFunction, Request, Response } from 'express'
import Helper from '../../helpers/responseData'
import CategoriesService from '../../services/categoriesService'
import { v4 } from 'uuid'

const categoriesService = new CategoriesService()

class CategoriesController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const allCategories = await categoriesService.findAll()

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, allCategories))
    } catch (err) {
      next(err)
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    try {
      const oneCategory = await categoriesService.findOne(id)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, oneCategory))
    } catch (err) {
      next(err)
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await categoriesService.create({
        id: v4(),
        ...req.body,
      })

      return res.status(204).send(Helper.ResponseData(204, null, null, null))
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    try {
      await categoriesService.update(req.body, id)
      const updatedCategory = await categoriesService.findOne(id)

      return res
        .status(200)
        .send(Helper.ResponseData(200, null, null, updatedCategory))
    } catch (err) {
      next(err)
    }
  }
  static async delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    try {
      await categoriesService.delete(id)
      return res.status(200).send(Helper.ResponseData(200, null, null, null))
    } catch (error) {
      next(error)
    }
  }
}

export default CategoriesController
