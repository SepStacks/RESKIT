<template>
  <div>
<v-main>
      <v-container fill-height >
      <v-row align="center" justify="center">
        <vLottiePlayer
          name="workoutMonkeyAnim"
          loop
          :animationData="require('@/assets/animation.json')"
        />
      </v-row>
    </v-container>
</v-main>

  </div>
</template>