<template>
  <v-app>
    <v-card
      flat
      dense
      color="transparent"
    >

      <v-app-bar
        flat
        color="transparent"
      >

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

        <v-spacer></v-spacer>

        <v-btn dark text>
          <v-icon class="mx-2" to="https://github.com/SepStacks/RESKIT">la-github</v-icon>
          Github
        </v-btn>
      </v-app-bar>

    </v-card>
    <nuxt />
  </v-app>
</template>
