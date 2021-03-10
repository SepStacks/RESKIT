<template>
  <div>
    <v-btn-toggle
      mandatory
      v-model="inputVal"
    >

      <div
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

      </div>

    </v-btn-toggle>

  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
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
    },

  },
}
</script>

<style lang="scss" scoped>
</style>