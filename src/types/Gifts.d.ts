export interface IGift {
  id: string
  name: string
  description: string
  short_description: string
  image: string
  category_id: string
  assigned_by: string
}

export interface IGiftInput extends Omit<IGift, 'id'> {}
export interface IGiftOutput extends Required<IGift> {}
