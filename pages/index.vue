<script lang="ts" setup>
const { categories, addContents, contents } = useContentManager()

const loading = ref(true)


onMounted(async () => {
  const keyword = categories.value[0].search_keyword
  try {
    const response = await youtube(categories.value[0].search_keyword)
    addContents(keyword, response)

    console.log(keyword)
    console.log(response)
  } catch (error) {
    console.log(`Failed to get contents from Youtube, use defatult contents for ${keyword}`)

    const response: FCContent[] = [
      { title: 'Galaxy S24 Ultra: Official Introduction Film | Samsung', ytId: '3hPoEmlBQdY' },
      { title: 'Samsung Galaxy S24 review', ytId: 'u9yv3RmqAm8' },
    ]
  }
  loading.value = false
})

</script>


<template>
  <Loading v-if='loading' />
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>


<style scoped></style>