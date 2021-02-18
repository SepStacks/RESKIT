<template>
    <div id="app">

    <v-btn-toggle mandatory  v-model="buttonToggleView">
        <v-btn  v-for="btn in btns" :key="btn.index"  @click="views = btn.class"
>
        {{btn.title}}
        </v-btn>


    </v-btn-toggle>
        <v-btn-toggle  mandatory  v-model="toggleScreen">
        <v-btn :value="screen"  v-for="(screen, index) in screens" :key="index"  @click="toggleScreen = screen"
>
        {{screen.title}}


        </v-btn>

    </v-btn-toggle>


<div id="wrapper" >

  <v-sheet class="phone " id="phone_1" :height="toggleScreen.height" :width="toggleScreen.width"  :class="views">
    <iframe class="holds-the-iframe" src="https://nuxtjs.org/"  id="frame_1"></iframe>

<!-- navigational buttons that will be implented in the future -->
    <!-- <v-bottom-navigation
    style="z-index='9999'"
    :value="value"
    color="primary"
    horizontal
  >
    <v-btn>
      <span>Recents</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation> -->
  </v-sheet>

</div>

<div>


</div>

    </div>
</template>

<script>
    export default {

        data: () => ({
                width: 300,
                buttonToggleView: '',
                toggleScreen: {title: 'Mobile', width: '482', height: '982'},
                views: 'view_1',
                btns: [
                    {
                        title: 'view 1', class: 'view_1'
                    },
                     {
                        title: 'view 2', class: 'view_2'
                    },
                     {
                        title: 'view 3', class: 'view_3'
                    }
                ],
                 screens: [
                    {
                        title: 'Mobile', width: '414', height: '736',
                    },
                     {
                        title: 'Tablet', width: '960', height: '600',
                    },

                ]


        }),

        methods: {
        updateView(view) {
        if (view) {
        phone.className = "phone view_" + view;

        }
}
        }

    }
</script>

<style >

#wrapper {
    perspective: 1000px;
}

 .phone {
    border: 40px solid #ddd;
    border-width: 55px 7px;
    border-radius: 30px;
    margin: 50px auto;
    overflow: hidden;
    transition: all 0.5s ease;
  }


    .phone iframe {
    border: 0;
    width: 100%;
    height: 100%;
        overflow: hidden;


  }

     .phone.view_2 {
    transform: rotateX(0deg) rotateY(-60deg) rotateZ(0deg);
    box-shadow: 5px 1px 0 #BBB, 9px 2px 0 #BBB, 12px 3px 0 #BBB, 15px 4px 0 #BBB, 0 7px 20px #999;
  }

  .phone.view_1 {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);

    box-shadow: 0px 3px 0 #BBB, 0px 4px 0 #BBB, 0px 5px 0 #BBB, 0px 7px 0 #BBB, 0px 10px 20px #666;

  }
 .phone.view_3 {
    transform: rotateX(50deg) rotateY(0deg) rotateZ(-50deg);
    box-shadow: -3px 3px 0 #BBB, -6px 6px 0 #BBB, -9px 9px 0 #BBB, -12px 12px 0 #BBB, -14px 10px 20px #666;
  }


/* add a dynamic property to handle the scale
    this is optional but perhaps a $vuetify.breakpoint will do the job

*/
 @media (max-width:900px) {
    #wrapper {
      transform: scale(0.8, 0.8);

    }
  }

  @media (max-width:700px) {
    #wrapper {
      transform: scale(0.6, 0.6);
    }
  }

  @media (max-width:500px) {
    #wrapper {
      transform: scale(0.4, 0.4);
    }
  }

  .holds-the-iframe {
  background:url('https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif') center center no-repeat;
background-color: grey;
}

</style>