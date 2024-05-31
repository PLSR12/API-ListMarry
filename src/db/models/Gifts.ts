import { DataTypes, Model } from 'sequelize'
import connection from '../../config/dbConnect'
import { IGift, IGiftInput } from '../../types/Gifts'
import Categories from './Categories'

class Gifts extends Model<IGift, IGiftInput> implements IGift {
  public id!: string
  public name!: string
  public category_id!: string
  public image!: string
  public description!: string
  public short_description!: string
  public assigned_by!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Gifts.init(
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
    category_id: {
      type: DataTypes.UUID,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    short_description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    assigned_by: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },

  {
    timestamps: true,
    sequelize: connection,
    underscored: false,
    modelName: 'gifts',
  }
)

export default Gifts
