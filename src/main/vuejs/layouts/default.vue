<template>
  <v-app  id="app">
     <v-main >
        <nuxt />

     </v-main>
  </v-app>
</template>

<script>
export default {
   // computed: {
   //  handleScroll() { 
   //    if (this.$vuetify.breakpoint.lgAndUp) return 'overflow--lg'
   //    // You can check the value of the helpers (mdAndUp) or write a switch/case for this.$vuetify.breakpoint.name
   //    return 'overflow--md'
   //  }}
};
</script>



<style>

     /* html, body {margin: 0; height: 100%; }  */

/* md and below */
@media screen and (max-width: 1264px) {

}

/* lg and up */

@media screen and (min-width: 1264px) {

  html, body {margin: 0; height: 100%; overflow: hidden;
 } 
    ::-webkit-scrollbar {
  display: none;
}
 
}


</style>
