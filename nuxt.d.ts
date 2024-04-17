interface Thumbnail {
  id: number
  image: string
}

interface Content {
  keyword: string
  ytId: string
}

interface Column 
{
  name: string
  currentIndex: number
  contents: Content[]
}

interface FCCategory
{
  name: string
  score: number
  search_keyword: string
}

interface FCContent
{
  title: string
  ytId: string
}