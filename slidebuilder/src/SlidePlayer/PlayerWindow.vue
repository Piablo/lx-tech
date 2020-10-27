<template>
  <div class="main-container-playerWindow">
    <div v-for="(slide, index) in slides" :key="index">
      <CardDisplayer :slideData="slide" :slideIndex="index"></CardDisplayer>
    </div>
  </div>
</template>

<script>
//Components
import CardDisplayer from './CardDisplayer';

//Services
import { bus }from '@/services/Bus';

//Vuex
import { mapGetters } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'props'
  ],
  components: {
    CardDisplayer
  },
  data(){
    return {
      endTick: null,
      windowTimer: null,
      interval: 100,
      slides: [],
      addedSlideIndex: 0,
      slidesTiming: null,
      currentTick: 0,
      slideCount: null,
      allCardsLoaded: false
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
    play(){
      this.windowTimer = setInterval(function(){
      console.log("timer1")
        if(this.currentTick === this.endTick){
          return
        }
        this.pushNextDisplayCard();

        this.currentTick += this.interval;
      }.bind(this), this.interval);
    },
    pause(){
      clearInterval(this.windowTimer);
    },
    resetComponent(){
      this.pause();
      this.currentTick = 0;
      this.addedSlideIndex = 0;
      this.allCardsLoaded = false;
    },

    pushNextDisplayCard(){
      if(!this.allCardsLoaded){
        if(this.slidesTiming[this.addedSlideIndex].startTick === this.currentTick){
          bus.$emit("startTimer-" + this.addedSlideIndex, 'show-slide')
          this.addedSlideIndex++;
          if(this.addedSlideIndex === this.slideCount){
            this.allCardsLoaded = true;
          }
        }
      }
    }
  },

  computed: mapGetters(['getSlidePlayerData', 'getSlidePlayerStatus', 'getResetSlidePlayer', 'getSlides']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch: {
    getSlidePlayerData: function(data){
      this.endTick = data.endTick;
      this.slidesTiming = data.slidesTiming;
      this.slideCount = data.slideCount;
      // firstSlideStartTick: (...)
      // intervalCount: (...)
      // intervalWidth: (...)
    },
    getSlidePlayerStatus: function(status){
      if(status){
        this.play();
      }else{
        this.pause();
      }
    },
    getResetSlidePlayer: function(resetCount){
      //this.resetComponent()
    },
    getSlides: function(slides){
      this.slides = slides;
    }
  }
}
</script>

<style scoped>

.main-container-playerWindow{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>