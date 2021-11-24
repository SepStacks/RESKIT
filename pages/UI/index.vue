<template>
  <div>
    <Structure>
      <template #content>
        <v-text-field v-model="url" solo />
        <v-btn @click="src = url">update</v-btn>

        <v-card color="#C4C5C7" height="100%">
          <Structure>
            <template #content>
              <v-row justify="center">
                <v-col
                  cols="12"
                  :xl="device.xl"
                  :lg="device.lg"
                  class="pa-5"
                  v-for="device in devices"
                  :key="device.id"
                >
                  <v-select
                    solo
                    label="devices"
                    v-model="device.breakpoint"
                    :items="device.items"
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
                    :height="device.breakpoint.height"
                    :width="device.breakpoint.width"
                    :screen="device.breakpoint.screen"
                    :types="types"
                    :src="src"
                  />
                </v-col>
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
  asyncData({}) {
    const lgAndUp = [...laptops, ...televisions];

    const mdAndDown = [...phones, ...tablets];
    const selectedLgAndUp = {
      name: 'Laptop with HiDPI screen',
      featured: false,
      width: 1440,
      height: 900,
      userAgent: '',
      touch: false,
      os: '',
      screen: 'laptop',
    };

    const selectedMdAndDown = {
      name: 'Galaxy S10/S10+',
      featured: true,
      width: 360,
      userAgent: '',
      touch: false,
      os: 'Android',
      screen: 'phone',
      height: 760,
    };
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
    ];

    return {
      devices,
    };
  },
  data() {
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
    };
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
</style>