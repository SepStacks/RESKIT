<template>
  <ToolTip :title="title">
    <template #content>
      <v-hover v-slot="{ hover }">
        <v-btn
          icon
          large
          tile
          :depressed="hover ? false : true"
          class="button-action"
          :color="hover ? 'primary' : 'midnight'"
          v-on="{
            ...$listeners
          }"
        >
          <v-icon
            width="50"
            color="white"
            small
          >{{icon}}</v-icon>
        </v-btn>
      </v-hover>
    </template>
  </ToolTip>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    }
  }

}
</script>

<style lang="scss" scoped>
.button-action {
  -moz-box-shadow: inset 0 0 10px #00000021;
  -webkit-box-shadow: inset 0 0 10px #00000021;
  box-shadow: inset 0 0 10px #0000004f;
}
</style>