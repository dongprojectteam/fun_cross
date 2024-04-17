export default async (keyword: string = '사이타마', n: number = 10) => {
  const config = useRuntimeConfig()
  const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${n}&q=${keyword}&type=video&key=${config.public.ytKey}`

  const data = await $fetch(searchUrl)
  return data.items.map((item) => ({
    title: item.snippet.title,
    videoId: item.id.videoId,
  }))
}
