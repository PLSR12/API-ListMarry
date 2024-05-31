import Categories from '../db/models/Categories'
import Gifts from '../db/models/Gifts'
import ErrorBase from '../errors/errorBase'
import { ICategoryInput } from '../types/Categories'
import ErrorNotFound from './../errors/errorNotFound'

class CategoriesService {
  async findAll() {
    return await Categories.findAll({})
  }

  async findOne(id: string) {
    const data = await Categories.findByPk(id)

    if (!data) {
      throw new ErrorNotFound()
    }
    return data
  }

  async create(dto: ICategoryInput) {
    return await Categories.create(dto)
  }

  async update(dto: ICategoryInput, id: string) {
    const data = await this.findOne(id)

    if (!data) {
      throw new ErrorNotFound()
    } else {
      return await Categories.update(dto, { where: { id: id } })
    }
  }

  async delete(id: string) {
    const hasRelationship = await Gifts.findAll({
      where: {
        category_id: id,
      },
    })

    if (hasRelationship.length > 0) {
      throw new ErrorBase(' Cannot delete a category that is linked to a gift')
    }
    const data = await this.findOne(id)
    console.log('dataCategoryById', data)

    if (!data) {
      throw new ErrorNotFound()
    } else {
      return await Categories.destroy({ where: { id } })
    }
  }
}

export default CategoriesService
