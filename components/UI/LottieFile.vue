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
