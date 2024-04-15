export default async (keyword: string = '사이타마', n: number = 10) => {
  const config = useRuntimeConfig()  
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${keyword}&type=video&key=${config.public.ytKey}`

  console.log(searchUrl)
 

  const data = await $fetch(searchUrl)
  console.log(data.items)
}
