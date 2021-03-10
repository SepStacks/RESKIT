<template>
  <div id="wrapper">
    <v-sheet
      class="phone "
      id="phone_1"
      :height="toggleScreen.height"
      :width="toggleScreen.width"
      :class="views"
    >
      <slot
        v-if="$slots.content"
        name="content"
      />

      <iframe
        v-else
        id="frame_1"
        class="holds-the-iframe"
        :src="src"
      />
    </v-sheet>

  </div>
</template>

<script>
export default {
  props: {
    toggleScreen: {
      required: false
    },
    views: {
      required: false
    },
    src: {
      default: 'https://nuxtjs.org/'
    }
  },
  data: () => ({
    sandboxAttributes: [
      'allow-modals',
      'allow-forms',
      'allow-pointer-lock',
      'allow-popups',
      'allow-same-origin',
      'allow-scripts'

    ]
  }),

  mounted () {
    console.log(this.toggleScreen)
  }

}
</script>


<style scoped>
#wrapper {
  perspective: 1000px;
}

.phone {
  border: 40px solid #ddd;
  border-width: 55px 7px;
  border-radius: 30px;
  margin: 50px auto;
  overflow: hidden;
  transition: all 0.5s ease;
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

.phone iframe {
  border: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.phone.view_2 {
  transform: rotateX(0deg) rotateY(-60deg) rotateZ(0deg);
  box-shadow: 5px 1px 0 #bbb, 9px 2px 0 #bbb, 12px 3px 0 #bbb, 15px 4px 0 #bbb,
    0 7px 20px #999;
}

.phone.view_1 {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);

  box-shadow: 0px 3px 0 #bbb, 0px 4px 0 #bbb, 0px 5px 0 #bbb, 0px 7px 0 #bbb,
    0px 10px 20px #666;
}
.phone.view_3 {
  transform: rotateX(50deg) rotateY(0deg) rotateZ(-50deg);
  box-shadow: -3px 3px 0 #bbb, -6px 6px 0 #bbb, -9px 9px 0 #bbb,
    -12px 12px 0 #bbb, -14px 10px 20px #666;
}

/* add a dynamic property to handle the scale
    this is optional but perhaps a $vuetify.breakpoint will do the job

*/
@media (max-width: 900px) {
  #wrapper {
    transform: scale(0.8, 0.8);
  }
}

@media (max-width: 700px) {
  #wrapper {
    transform: scale(0.6, 0.6);
  }
}

@media (max-width: 500px) {
  #wrapper {
    transform: scale(0.4, 0.4);
  }
}

.holds-the-iframe {
  background: url('https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif')
    center center no-repeat;
  background-color: #fff;
}

/* Fade In Animation */

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>