<template>
  <div>
    <v-row dense justify="center" >
      <!-- controls -->
      <v-col
        cols="3"
        class="pa-5 mr-10"
      >
        <v-row >
          <v-col cols="12">
            <!-- text-field -->
            <v-text-field
              v-model="url"
              solo
            />
            <v-btn @click="src = url">update</v-btn>
          </v-col>

            <GroupsBtnGroup
              :items="screens"
              v-model="toggleScreen"
            />
            <!-- <v-btn-toggle
              mandatory
              v-model="toggleScreen"
            >
              <v-btn
                class="mx-3"
                :value="screen"
                v-for="(screen, index) in screens"
                :key="index"
                @click="toggleScreen = screen"
              >
                {{ screen.title }}
              </v-btn>

              <v-row>
                <v-col cols="12">
                  <v-row>
                    <v-col>
                      <v-icon text="las la-mobile" />
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-btn-toggle> -->


          <!-- Device -->

          <v-col
            cols="12"
            v-if="toggleScreen.title === 'Mobile'"
          >
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
                {{ btn.title }}
              </v-btn>
            </v-btn-toggle>

          </v-col>

        </v-row>
      </v-col>

      <v-col
        cols="7"
        class="pa-0 ma-0"
      >
        <Phone
          :src="src"
          :toggleScreen="toggleScreen"
          :views="toggleScreen.title === 'Tablet' ? 'view_1' : views"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: "https://nuxtjs.org/",
    src: "https://nuxtjs.org/",
    width: 300,
    buttonToggleView: "",
    toggleScreen: {
      title: "Mobile",
      width: "414",
      height: "736"

    },

    views: "view_1",
    // mode: 'Portrait',
    currentMode: '',

    btns: [
      {
        title: "view 1",
        class: "view_1"
      },
      {
        title: "view 2",
        class: "view_2"
      },
      {
        title: "view 3",
        class: "view_3"
      }
    ],

    screens: [
      {
        title: "Mobile",
        modes: [
          {
            title: 'Portrait',
            icon: 'las la-mobile',
            width: "414",
            height: "736"
          },
          {
            title: 'Landscape',
            width: "736",
            icon: 'las la-tablet',
            height: "414"
          }

          // landscape: {
          //   width: "736",
          //   height: "414"
          // }

        ],
        width: "414",
        height: "736"
      },
      {
        title: "Tablet",
        width: "960",
        height: "600"
      }
    ],
    orientations: [
      {
        title: "Mobile",
        width: "736",
        height: "414"
      },
      {
        title: "Tablet",
        width: "600",
        height: "960"
      }
    ]
  }),

  computed: {}

  // methods: {
  //   updateView (view) {
  //     if (view) {

  //       phone.className = "phone view_" + view

  //     }
  //   }
  // }
};
</script>

<style>
.hide {
  visibility: hidden !important;
}
</style>
