<template>
  <div class="main-container-player" v-if="showPlayer">
    <div class="slide-player-window-player"></div>
    <div class="spacer"></div>
    <div class="slide-player-controls-player">
      <PlayerControls></PlayerControls>
    </div>
    <div class="spacer"></div>
    <div class="slide-player-visualizer-player">
      <SlideVisualizer></SlideVisualizer>
    </div>
    <div class="spacer"></div>
    <div class="slide-player-action-logs-player"></div>
  </div>
</template>

<script>
//Components
import SlideVisualizer from '../SlidePlayer/SlideVisualizer';
import PlayerControls from '../SlidePlayer/PlayerControls';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry';

//Vuex
import { mapGetters } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    SlideVisualizer,
    PlayerControls
  },
  data(){
    return {
      LESSON_SELECTED: registry.LESSON_SELECTED,

      showPlayer: false,
      // slides: null,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
    // initializeComponentData(slides){
    //   this.slides = slides;
    //   this.timingExtremities = this.calcTimingExtremities(slides);
    //   debugger;
    // },

    // calcTimingExtremities(slides){
    //   const listLength = slides.length;
    //   let lowestTick = slides[0].timing.startTick;
    //   let currentHighest = 0;
    //   for(let i = 0; i < listLength; i++){
    //     if(slides[i].timing.endTick > currentHighest){
    //       currentHighest = slides[i].timing.endTick
    //     }
    //   }
    //   let highestTick = currentHighest;
    //   let returnValue = {
    //     lowestTick: lowestTick,
    //     highestTick: highestTick
    //   }
    //   return returnValue;
    // }
  },

  computed: mapGetters(['getViewState', 'getSlides']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },

  watch: {
    getViewState: function(viewState){
      if(viewState === this.LESSON_SELECTED){
        this.showPlayer = true;
      }
    },
    // getSlides: function(slides){
    //   this.initializeComponentData(slides);
    // }
  }
}
</script>

<style scoped>
.main-container-player{
  width: 100%;
  height: 100%;
}
.slide-player-window-player{
  width: 100%;
  padding-top: 56%;
  background-color: aliceblue;
}
.slide-player-controls-player{
  width: 100%;
  height: 50px;
}
.slide-player-visualizer-player{
  width: 100%;
  height: 100px;
}
.slide-player-action-logs-player{
  width: 100%;
  height: 100px;
  background-color:brown;
}
.spacer{
  height: 5px;
}
</style>