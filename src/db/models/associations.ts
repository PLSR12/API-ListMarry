import Gifts from './Gifts'
import Categories from './Categories'

export const associations = () => {
  Gifts.belongsTo(Categories, {
    foreignKey: 'category_id',
  })

  Categories.hasOne(Gifts, {
    foreignKey: 'id',
  })
}
