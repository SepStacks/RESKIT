<template>
  <div id="wrapper" :style="`transform: ${wrapperScaleStyles};`">
    <v-sheet class="device" id="device" :height="height" :width="width">
      <v-container v-if="$slots.content" fill-height>
        <slot name="content" />
      </v-container>
      <iframe v-else id="frame_1" class="holds-the-iframe" :src="src" />
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String, default: 'https://nuxtjs.org/' },
    activeDevice: { type: Object },
    height: {
      required: false,
    },
    width: {
      required: false,
    },
    screen: { type: String },
    src: {
      default: 'https://nuxtjs.org/',
    },
    deviceType: {
      type: String,
    },
    types: {
      type: Array,
    },
  },
  computed: {
    // compare selected screen to an array of screens
    // checkScreen() {
    //   // const type = this.types.forEach((type) => type === this.screen);
    //   // console.log('check-screen', this.screen, type, this.types);
    //   // return type;
    //   const type = this.types.forEach((screenType) => {
    //     switch (screenType) {
    //       case 'television':
    //         return true;
    //       case 'laptop':
    //         return true;
    //       case 'tablet':
    //         return true;
    //       case 'phone':
    //         return true;
    //     }
    //   });
    //   console.log('type', type);
    //   return type;
    // },
    // Check what screen size
    simulationBreakpoints() {
      //this is needed nested underneath vuetify's initial breakpoint switch function
      // use-case
      // if you have large screen (>1264px < 1904px) and you want to simulate xl screens (>1904)
      // this function allow you to add breakponts onto the simulated screens
      // if you dont use this, you wont be able to simulate 4k screens and their smaller versions acurrately
      //create a base for the switch function
      switch (true) {
        // xl
        case this.width > 1904:
          console.log('simultated-xl');

          return 'simultated-xl';
        // lg
        case this.width < 1904 && this.width > 1264:
          console.log('simultated-lg');
          return 'simultated-lg';
        // md
        case this.width < 1264 && this.width > 960:
          console.log('simultated-md');
          return 'simultated-md';
        // sm
        case this.width < 960 && this.width > 600:
          return 'simultated-sm';
        // xs
        case this.width < 600:
          return 'simultated-xs';
      }
    },
    wrapperScaleStyles() {
      console.log('hello', this.screen === this.checkScreen);
      // check what screen it is eg: (laptop, tablet, etc)
      // check what viewpoint it is eg: (xl, lg etc)
      // Create a component property that will store simulated breakpoints that matches vuetify
      // Each value should return the group they belong to eg md, xl etc
      // Call the simulated breakpoints in a switch function and within each case return the correct scaling
      switch (true) {
        case this.screen === 'television':
          switch (this.$vuetify.breakpoint.name) {
            case 'xl':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.6, 0.6)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'lg':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'md':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'sm':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'xs':
              //Simulated breakpoints
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }
          }
        case this.screen === 'laptop':
          switch (this.$vuetify.breakpoint.name) {
            case 'xl':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.6, 0.6)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'lg':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'md':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'sm':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'xs':
              //Simulated breakpoints
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }
          }
        case this.screen === 'tablet':
          switch (this.$vuetify.breakpoint.name) {
            case 'xl':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.6, 0.6)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'lg':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'md':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'sm':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'xs':
              //Simulated breakpoints
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }
          }
        case this.screen === 'phone':
          switch (this.$vuetify.breakpoint.name) {
            case 'xl':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.6, 0.6)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'lg':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'md':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'sm':
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }

            case 'xs':
              //Simulated breakpoints
              switch (this.simulationBreakpoints) {
                case 'simultated-xl':
                  return 'scale(0.1, 0.1)';
                case 'simultated-lg':
                  return 'scale(0.4, 0.4)';
                case 'simultated-md':
                  return 'scale(0.4, 0.4)';
                case 'simultated-sm':
                  return 'scale(0.4, 0.4)';
                case 'simultated-xs':
                  return 'scale(0.4, 0.4)';
              }
          }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  transform-origin: top left;
}
.device {
  border: 40px solid #2f3850;
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
.device iframe {
  border: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>