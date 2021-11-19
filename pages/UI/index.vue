<template>
  <div>
    <Structure>
      <template #content>
        <v-text-field class="pa-5" label="Url" />
        <v-btn class="pa-5">submit</v-btn>

        <v-card color="#C4C5C7">
          <Structure>
            <template #content>
              <v-row class="pa-5">
                <v-select
                  label="devices"
                  v-model="selectedDesktop"
                  :items="lgAndUP"
                  return-object
                >
                  <template slot="selection" slot-scope="data">
                    <!-- HTML that describe how select should render selected items -->
                    {{ data.item.name }} - {{ data.item.width }} x
                    {{ data.item.height }}
                  </template>
                  <template slot="item" slot-scope="data">
                    <!-- HTML that describe how select should render items when the select is open -->
                    {{ data.item.name }} - {{ data.item.width }} x
                    {{ data.item.height }}
                  </template>
                </v-select>

                <Device
                  :height="selectedDesktop.height"
                  :width="selectedDesktop.width"
                  :screen="selectedDesktop.screen"
                  :types="types"
                />

                <v-select
                  label="devices"
                  v-model="selectedMobile"
                  :items="mdAndDown"
                  :item-text="'size'"
                  return-object
                />

                <Device
                  :toggleScreen="selectedMobile.dimentions"
                  :screen="selectedMobile.screen"
                  :types="types"
                />
              </v-row>
            </template>
          </Structure>
        </v-card>
      </template>
    </Structure>
  </div>
</template>

<script>
import {
  phones,
  tablets,
  laptops,
  televisions,
  TYPES,
} from '~/assets/devices.json';
import Structure from '~/components/Structure.vue';
import Device from '~/components/Device.vue';

console.log('devices-module');
export default {
  components: { Structure, Device },
  data() {
    return {
      // Device types
      types: TYPES,

      // Devices
      phones: phones,
      tablets: tablets,
      laptops: laptops,
      televisions: televisions,

      selectedDesktop: {
        name: 'Laptop with HiDPI screen',
        featured: false,
        width: 1440,
        height: 900,
        userAgent: '',
        touch: false,
        os: '',
        screen: 'laptop',
      },
      selectedMobile: {
        id: 3,
        screen: 'mobile',
        size: '480 X 360',

        dimentions: {
          width: 360,
          height: 480,
        },
      },
      toggleScreen: {
        width: 1920,
        height: 1080,
      },

      devices: [
        {
          id: 1,
          screen: 'desktop',
          size: '1920 X 1080',
          dimentions: {
            width: 1920,
            height: 1080,
          },
        },
        {
          id: 2,
          screen: 'desktop',
          size: '1080 X 720',
          dimentions: {
            width: 1080,
            height: 720,
          },
        },
        {
          id: 3,
          screen: 'mobile',
          size: '480 X 360',

          dimentions: {
            width: 360,
            height: 480,
          },
        },
      ],
    };
  },
  computed: {
    // Seperate data based on breakpoints
    // Enable filtering for breakpoints

    lgAndUP() {
      const lgAndUp = [...this.laptops, ...this.televisions];
      return lgAndUp;
      //filter by breakpoint
      // lgAndUP.filter(device => device.width)
    },
    mdAndDown() {
      const mdAndDown = [...this.phones, ...this.tablets];
      return mdAndDown;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>