<template>
  <div>
    <v-btn-toggle
      mandatory
      v-model="inputVal"
    >
      <v-card
        class="mx-3 pa-5"

        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn
          class="mx-3 "
           :value="item"
          @click="inputVal = item"
        >
          {{ item.title }}
        </v-btn>

        <v-row class="mt-3">
          <v-col cols="12">
            <v-row
              dense
              align="center"
              justify="center"
            >
              <v-col
                cols="6"
                class="pa-0 ma-0 d-flex justify-center"
                v-for="(mode, index2) in item.modes"
                :key="index2"
              >
                <v-btn @click="inputVal = mode">
                  <v-icon v-text="mode.icon" />
                </v-btn>
              </v-col>
              <!-- <v-col cols="12" class="pa-0 ma-0 d-flex justify-center">
              <v-icon v-text="'las la-tablet'" />
            </v-col> -->
            </v-row>
          </v-col>
        </v-row>
      </v-card>

    </v-btn-toggle>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    items: {
      required: true
    },
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>