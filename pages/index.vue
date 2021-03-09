<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <Phone
      class="size"
      :toggleScreen="toggleScreen"
          src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          :views=" 'view_3'"
        />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      toggleScreen: { title: "Mobile", width: "482", height: "982" },

    }
  }
}
</script>

<style>
 .size {
    transform: scale(0.8, 0.8);
  }
</style>