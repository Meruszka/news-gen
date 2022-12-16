export interface Source {
  id: string | null
  name: string | null
}

export interface News {
  source: Source
  author: string | null
  title: string | null
  description: string | null
  url: string | undefined
}

export interface Response {
  status: string
  totalResults: number
  articles: News[]
}

export interface ErrorResponse {
  status: string
  message: string
}
