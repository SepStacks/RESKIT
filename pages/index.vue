<template>
  <v-container>

    <v-row
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        xl="4"
        lg="5"
        md="6"
      >
        <div class="white--text display-4">RESKIT</div>
        <div class="display-1 white--text mt-2">
          Responsive Testing-UI made With Nuxt + vuetify
        </div>

        <v-btn
          dark
          class="mt-5"
          color="accent"
          to="/test-ui"
        >Test UI</v-btn>

      </v-col>
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

            <UiVueFile
              :file="'LottieFile'"
              :toggleScreen="toggleScreen"
              class="d-flex align-center uifile"
            />

          </div>

        </Phone>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
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
  animation: rotate 15s infinite linear;

  /* -webkit-animation-name: rotate;
  -webkit-animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear; */
}
/* Rotate Animation */

.uifile {
  align-items: center !important;
}
</style>