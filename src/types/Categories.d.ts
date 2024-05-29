export interface ICategory {
  id: string
  name: string
  description: string
}

export interface ICategoryInput extends Omit<ICategory, 'id'> {}
export interface ICategoryOutput extends Required<ICategory> {}
