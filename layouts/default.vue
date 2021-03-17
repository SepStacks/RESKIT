<template>
  <v-app>
    <v-app-bar
      color="tralsparent"
      
    >

      <v-app-bar-nav-icon>
       <v-col cols="10">
          <v-img
          width="30px"
          src="/sepstacks-logo.svg"
          lazy-src="/sepstacks-logo.svg"
        >

          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              >
              </v-progress-circular>
            </v-row>
          </template>
        </v-img>

       </v-col>
      </v-app-bar-nav-icon>

    </v-app-bar>

    <nuxt />
  </v-app>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
</style>
