<template>
  <div>
    <v-app-bar
      app
      color="info"
    >
      <v-toolbar-title class="white--text">resKit</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="pt-7"
        v-model="url"
        solo
        dark
        background-color="darkness"
      />
      <v-btn
        class="d-flex align-center ml-3"
        height="46"
        @click="src = url"
      >update</v-btn>

      <v-spacer></v-spacer>

      <v-btn
        dark
        icon
        @click="dialog=true"
      >
        <v-icon>mdi-qrcode</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card
      color="background"
      :height="$vuetify.breakpoint.lgAndUp ? '100vh' : '100%'"
    >

      <v-row dense>
        <v-col
          class="px-2"
          cols="12"
          ref="deviceRef"
          :xl="device.xl"
          :lg="device.lg"
          v-for="device in devices"
          :key="device.id"
        >

          <v-card
            :height="maxHeight"
            class="child mt-3"
            color="infoBg"
          >

            <v-toolbar color="info">
              <div
                color="secondary"
                class="d-flex align-center pa-5 sheet text--text"
              >

                {{simulationBreakpoints(device)}}
              </div>
              <v-spacer></v-spacer>
              <v-select
                dark
                background-color="darkness"
                class="mt-8 mx-5"
                label="devices"
                v-model="device.breakpoint"
                :items="device.items"
                solo
              >
                <template
                  slot="selection"
                  slot-scope="data"
                >
                  <!-- HTML that describe how select should render selected items -->
                  {{ data.item.name }} - {{ data.item.width }} x
                  {{ data.item.height }}
                </template>
                <template
                  slot="item"
                  slot-scope="data"
                >
                  <!-- HTML that describe how select should render items when the select is open -->
                  {{ data.item.name }} - {{ data.item.width }} x
                  {{ data.item.height }}
                </template>
              </v-select>
              <v-spacer />
              <IconClick title="rotate" icon="mdi-phone-rotate-landscape" @click="device.rotate = !device.rotate"
/>
<!-- 
              <ToolTip title="rotate">
                <template #content>
                  <v-hover v-slot="{ hover }">
                    <v-btn
                      icon
                      large
                      tile
                      :depressed="hover ? false : true"
                      class="button-action"
                      :color="hover ? 'primary' : 'midnight'"
                      @click="device.rotate = !device.rotate"
                    >
                      <v-icon
                        width="50"
                        color="white"
                        small
                      >mdi-phone-rotate-landscape</v-icon>
                    </v-btn>
                  </v-hover>
                </template>
              </ToolTip> -->

            </v-toolbar>

            <div
              ref="node"
              id="rotate"
            >
              <Device
                :rotate="device.rotate"
                class="mt-5"
                :height="device.rotate === false ? device.breakpoint.height : device.breakpoint.width "
                :width="device.rotate === false ? device.breakpoint.width : device.breakpoint.height "
                :screen="device.breakpoint.screen"
                :types="types"
                :src="src"
              />
            </div>

          </v-card>

        </v-col>

      </v-row>

    </v-card>

    <Dialog
      v-model="dialog"
      header="sdsd"
      maxWidth="500"
      closeBTNName="Not Now"
    >
      <v-container slot="content">
        <div class="text-h6 text-center font-weight-bold">Test on mobile device</div>
        <vue-qr
          :text="url"
          qid="testid"
        ></vue-qr>

      </v-container>

    </Dialog>

  </div>
</template>

<script>
import {
  phones,
  tablets,
  laptops,
  televisions,
  TYPES,
} from '~/assets/devices.json'
import Structure from '~/components/Structure.vue'
import Device from '~/components/Device.vue'

console.log('devices-module')
export default {
  components: { Structure, Device },
  asyncData (context) {
    console.log(context)
    const lgAndUp = [...laptops, ...televisions]
    const mdAndDown = [...phones, ...tablets]
    //initial selection for Vmodel
    const devices = [
      {
        id: 1,
        rotate: false,
        lg: 8,
        xl: 7,

        screenSize: 'lgAndUp',
        items: lgAndUp,
        breakpoint: lgAndUp[3],
        viewport: ''

      },
      {
        id: 2,
        rotate: false,
        xl: 5,
        lg: 4,
        screenSize: 'mdAndDown',
        items: mdAndDown,
        breakpoint: mdAndDown[6],
        viewport: ''
      },
    ]

    return {
      devices,
    }
  },
  data () {
    return {
      rotate: false,
      dialog: false,
      url: 'https://nuxtjs.org/',
      src: 'https://nuxtjs.org/',
      // Device types
      types: TYPES,

      // Devices
      phones: phones,
      tablets: tablets,
      laptops: laptops,
      televisions: televisions,

      cardSizes: [{
        breakpoint: 'xs',
        size: '100%'
      },
      {
        breakpoint: 'sm',
        size: '100%'
      },
      {
        breakpoint: 'md',
        size: '600px'
      },
      {
        breakpoint: 'lg',
        size: '700px'
      },
      {
        breakpoint: 'xl',
        size: '850px'
      }
      ]
    }
  },

  computed: {
    maxHeight () {
      //refractored switch function to make use of array
      for (const item of this.cardSizes) {
        switch (this.$vuetify.breakpoint.name) {
          case item.breakpoint:
            console.log({ item })
            return item.size
        }
      }
    },
  },
  mounted () {
  },
  methods: {
    simulationBreakpoints (device) {
      for (const item of this.devices) {
        if (item.id === device.id) {
          switch (true) {
            //4k
            case device.breakpoint.width > 2160:
              return '4k'
            // xl
            case device.breakpoint.width < 2160 && device.breakpoint.width > 1904:
              return 'xl'
            // lg
            case device.breakpoint.width < 1904 && device.breakpoint.width > 1264:
              return 'lg'
            // md
            case device.breakpoint.width < 1264 && device.breakpoint.width > 960:
              return 'md'
            // sm
            case device.breakpoint.width < 960 && device.breakpoint.width > 600:
              return 'sm'
            // xs
            case device.breakpoint.width < 600:
              return 'xs'
          }
        }
      }



    },
  }
  // watch: {
  //   simulationBreakpoints() {
  //     this.simulationBreakpoints
  //   }
  // }
};
</script>

<style scoped>
.parent {
  /* background-color: lightblue; */
  /* max-height: 50%; */
  /* padding: 10px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.child {
  /* position: absolute; */

  overflow-y: none;
}

.sheet {
  border: solid 1px #416ba2;
  height: 40px;
  border-radius: 5px;
  -moz-box-shadow: inset 0 0 10px #00000021;
  -webkit-box-shadow: inset 0 0 10px #00000021;
  box-shadow: inset 0 0 10px #0000004f;
}


</style>