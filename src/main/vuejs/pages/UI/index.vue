<template>
  <div>
    <v-app-bar
      app
      color="grey"
      elevate-on-scroll
    >
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        class="pt-7"
        v-model="url"
        solo
      />
      <v-btn
        class="d-flex align-center ml-3"
        height="46"
        @click="src = url"
      >update</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-qrcode</v-icon>
      </v-btn>
    </v-app-bar>
    <v-card
      color="#C4C5C7"
      class="parent"
      height="100vh"
    >

      <v-row  >
        <v-col
          cols="12"
          :xl="device.xl"
          :lg="device.lg"
          v-for="device in devices"
          :key="device.id"
        >
          <v-card :max-height="maxHeight"  class="child mt-5 mx-3">
            <v-toolbar>
              <v-select
                class="mt-8"
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
              <v-btn>

              </v-btn>
              <v-btn class="ml-2">

              </v-btn>

            </v-toolbar>
                  <Device 
                class="mt-5"
                :height="device.breakpoint.height"
                :width="device.breakpoint.width"
                :screen="device.breakpoint.screen"
                :types="types"
                :src="src"
              />
          </v-card>

        </v-col>

      </v-row>

    </v-card>

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
  asyncData ({ }) {
    const lgAndUp = [...laptops, ...televisions]
    const mdAndDown = [...phones, ...tablets]
     const selectedLgAndUp = {
      name: 'Laptop with HiDPI screen',
      featured: false,
      width: 1440,
      height: 900,
      userAgent: '',
      touch: false,
      os: '',
      screen: 'laptop',
    }

    const selectedMdAndDown = {
      name: 'Galaxy S10/S10+',
      featured: true,
      width: 360,
      userAgent: '',
      touch: false,
      os: 'Android',
      screen: 'phone',
      height: 760,
    }
    const devices = [
      {
        id: 1,
        lg: 8,
        screenSize: 'lgAndUp',
        items: lgAndUp,
        breakpoint: selectedLgAndUp,
      },
      {
        id: 2,
        lg: 4,
        screenSize: 'mdAndDown',
        items: mdAndDown,
        breakpoint: selectedMdAndDown,
      },
    ]

    return {
      devices,
    }
  },
  data () {
    return {
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
        size: '800px'
      },
      {
        breakpoint: 'sm',
        size: '800px'
      },
      {
        breakpoint: 'md',
        size: '800px'
      },
      {
        breakpoint: 'lg',
        size: '700px'
      },
        {
        breakpoint: 'xl',
        size: '800px'
      }
      ]
    }
  },

  computed: {
    maxHeight() {
      //refractored switch function to make use of array
      for (const item of this.cardSizes) {
     switch (this.$vuetify.breakpoint.name) {
        case item.breakpoint:
          console.log({item})
          return item.size
      }
}
    
     

    }
  },
  mounted() {
    console.log(this.maxHeight, 'max')
  },
  methods: {

  },
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

</style>