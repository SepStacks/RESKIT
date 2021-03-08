<template>
  <div>

    <v-container>
      <v-row dense>

        <v-col cols="3">
          <v-row>
            <v-col cols="12">
              <!-- text-field -->
              <v-text-field
                v-model="url"
                solo
              />
              <v-btn @click="src = url">update</v-btn>

            </v-col>

            <v-col cols="12">

              <!-- Device -->

              <v-btn-toggle
                mandatory
                v-model="toggleScreen"
              >
                <v-btn
                  :value="screen"
                  v-for="(screen, index) in screens"
                  :key="index"
                  @click="toggleScreen = screen"
                >
                  {{screen.title}}

                </v-btn>

              </v-btn-toggle>
            </v-col>
                <v-col cols="12" v-if="toggleScreen.title === 'Mobile'">
              <!-- Views-->
              <v-btn-toggle
                mandatory
                v-model="buttonToggleView"
              >
                <v-btn
                :class="btn.class"
                  v-for="btn in btns"
                  :key="btn.index"
                  @click="views = btn.class"
                >
                  {{btn.title}}
                </v-btn>

              </v-btn-toggle>
            </v-col>
          </v-row>

        </v-col>


        <v-col
          cols="9"
          class="pa-0 ma-0"
        >

          <Phone
            :src="src"
            :toggleScreen="toggleScreen"
            :views="toggleScreen.title === 'Tablet' ? 'view_1' : views"
          />

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {

  data: () => ({
    url: 'https://nuxtjs.org/',
    src: 'https://nuxtjs.org/',
    width: 300,
    buttonToggleView: '',
    toggleScreen: { title: 'Mobile', width: '482', height: '982' },
    views: 'view_1',

    screens: [
      {
        title: 'Mobile', width: '414', height: '736',
      },
      {
        title: 'Tablet', width: '960', height: '600',
      },

    ]


  }),

  computed: {
    btns() {
      return [
        {
          title: 'view 1', class: 'view_1'
        },
        {
          title: 'view 2', class: 'view_2'
        },
        {
          title: 'view 3', class: 'view_3'
        }
      ]
    }
  },

  // methods: {
  //   updateView (view) {
  //     if (view) {

  //       phone.className = "phone view_" + view

  //     }
  //   }
  // }

}
</script>

<style>
.hide {
  visibility: hidden !important;
}
</style>