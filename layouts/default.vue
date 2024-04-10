<template>
  <div class="container">
    <div class="rectangle top">
    </div>
    <div class="rectangle center">
      <slot></slot>
    </div>
    <div class="rectangle bottom">
    </div>
    <div class="rectangle left"></div>
    <div class="rectangle right"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.rectangle {
  width: var(--video-box-width);
  height: var(--video-box-height);
  background-color: white;
  border-radius: 15px;
}

.top {
  position: absolute;
  top: calc(0px - var(--video-box-height-half)*1.4);
  left: 50%;
  transform: translateX(-50%);
  background-color: #ddd;
  zoom: 0.8;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ddd;
  zoom: 1.2;
}

.bottom {
  position: absolute;
  bottom: calc(0px - var(--video-box-height-half)*1.4);
  background-color: #ddd;
  left: 50%;
  transform: translateX(-50%);
  zoom: 0.8;
}

.left {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ddd;
  left: calc(0px - var(--video-box-width-half)*1.4);
  zoom: 0.8;
}

.right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ddd;
  right: calc(0px - var(--video-box-width-half)*1.4);
  zoom: 0.8;
}
</style>