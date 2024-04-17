<template>
  <div class="loading-screen">
    <div class="loading-spinner">
      <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <span class="loading-text ml-3">당신을 위한 컨텐츠를 준비중...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner svg {
  animation: rotate 2s linear infinite;
}

.loading-spinner circle {
  stroke-dasharray: 26.096;
  stroke-dashoffset: 26.096;
}

.loading-text {
  color: #fff;
  font-size: 18px;
  margin-top: 10px;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
