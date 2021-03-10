<template>
  <div>

    <vLottiePlayer
      style="resizeMode='cover'"
      name="workoutMonkeyAnim"
      loop
      :width="toggleScreen.width"
      :animationData="require('@/assets/animation.json')"
    />

  </div>
</template>

<script>
export default {
  props: {
    toggleScreen: {
      required: false
    },

  },
}
</script>

<style>
lottie-player {
  margin: 0 auto;
}

.screen {
  width: 100%;
  padding: 15px;
  margin-bottom: 1px;
  border: none;
  box-sizing: border-box;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  color: black;
  background-color: #ffff;
  min-width: 280px;
  max-width: 500px;
}
</style>