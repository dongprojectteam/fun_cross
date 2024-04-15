<template>
  <NuxtPage />
</template>

<script setup lang='ts'>
let tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag)
</script>