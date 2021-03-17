<template>
  <div>
    <v-btn-toggle
    color="red"
      mandatory
      v-model="inputVal"
    >

      <v-card-actions>

        <v-btn
          v-for="(item, index) in items"
          :key="index"
          :value="item"
          @click="inputVal = item"
        >
          <v-icon v-text="item.icon" />
          {{ item.title }}
        </v-btn>

      </v-card-actions>

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