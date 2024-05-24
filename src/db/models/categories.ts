import { DataTypes, Model } from 'sequelize'
import connection from '../../config/dbConnect'
import { ICategory, ICategoryInput } from '../../types/Categories'

class Categories extends Model<ICategory, ICategoryInput> implements ICategory {
  public id!: string
  public name!: string
  public description!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Categories.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'categories',
  }
)

export default Categories
