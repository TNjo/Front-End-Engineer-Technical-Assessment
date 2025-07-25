export interface ProductRating {
  rate: number
  count: number
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

export interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}