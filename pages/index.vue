<template>
  <v-row
    justify="center"
    align="center"
  >
    <v-col
      cols="12"
      sm="8"
      md="6"
    >
      <Phone
        class="size"
        :toggleScreen='toggleScreen'
        :views=" 'view_3'"
      >
        <div
          class="content"
          slot="content"
        >

          <UiVueFile :file="'LottieFile'" />
        </div>

      </Phone>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      toggleScreen: {
        title: 'Mobile',
        width: '414',
        height: '736'

      },

    }
  }
}
</script>

<style scoped>
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(30deg);
  }
  50% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(0deg) rotateZ(30deg);
  }
}
.size {
  transform: scale(0.5, 0.5);
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}
/* Rotate Animation */
</style>