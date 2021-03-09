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
        :toggleScreen="toggleScreen"
        src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        :views=" 'view_3'"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      toggleScreen: { title: "Mobile", width: "482", height: "982" },

    }
  }
}
</script>

<style>

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

.size.rotate {
  -webkit-animation-name: rotate;
  -webkit-animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
}
</style>