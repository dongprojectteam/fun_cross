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

