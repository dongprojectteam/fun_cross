<template>
  <div class='h-100'>
    <!-- Chrome://flags/#autoplay-policy -->
    <div id='youtube-video'></div>
  </div>
</template>

<script lang="ts" setup>
const { getCurrentColumn, getCurrentIndex, navigateToDown, navigateToLeft, navigateToRight, navigateToUp, getCurrentYtId } = useColumns()
const { addCallback } = UseKeyboard()
const ytId = ref(getCurrentYtId())

let player: any = null
const playVideo = () => player?.playVideo()
const unMute = () => player?.unMute()

const keyboardCallback = (e: number) => {
  switch (e) {
    case FCKeyEvent.Up: navigateToUp(); break
    case FCKeyEvent.Down: navigateToDown(); break
    case FCKeyEvent.Left: navigateToLeft(); break
    case FCKeyEvent.Right: navigateToRight(); break
  }
  ytId.value = getCurrentYtId()
  console.log(ytId.value)
  player.loadVideoById(ytId.value)
}
addCallback(keyboardCallback)

const readyToPlay = ref(false)

window.onYouTubeIframeAPIReady = () => {
  readyToPlay.value = true
  player = new YT.Player('youtube-video', {
    width: '100%',
    height: '100%',
    playerVars: { 'autoplay': 1, 'mute': 0, 'controls': 0 },
    videoId: ytId.value,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}



const onPlayerReady = (event) => {
  console.log(event.target.isMuted())
  // unMute()
  recommend()
}

const onPlayerStateChange = (event) => {
  console.log(event.data)
}


</script>

<style scoped>
#player-container {
  width: 60%;
  height: 60%;
  margin: auto auto;
  border: 1px solid #ccc;
}

#video-frame {
  width: 100%;
  height: 80%;
  position: relative;
}

#video {
  width: 100%;
  height: 100%;
}

#thumbnail-frame {
  width: 100%;
  height: 20%;
  position: relative;
}

.thumbnail {
  width: 33.33%;
  height: 100%;
  float: left;
  background-color: #ccc;
  margin: 0;
  padding: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.selected {
  background-color: #ddd;
}
</style>