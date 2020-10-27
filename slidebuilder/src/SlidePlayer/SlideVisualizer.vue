<template>
  <div class="main-container-slideVisualizer">
    <div class="padding-container">
      <div v-for="interval in  intervalCount" :key="interval" class="interval-slideVisualizer" ref="intervalSlideVisualizer"></div>
     </div>

    <div class="padding-container">
      <div v-for="slide in  slideCount" :key="slide" class="slide-duration-slideVisualizer" ref="slideDurationSlideVisualizer"></div>
    </div>
  </div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'props'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      intervalWidth: null,
      intervalCount: null,

      slideCount: null,
      firstSlideStartTick: null,
      endTick: null,
      slidesTiming: null,

      visualizerTimer: null,
      currentTick: 0,
      interval: 100,
      currentTickIndex: 0,
    }
  },

  methods: {
    //...mapMutations(['getResetSlidePlayer']),

    renderSlideDurations(){
      const listLength = this.slideCount;
      let fromTop = 5;
      for(let i = 0; i < listLength; i++){
        let endInterval = ((this.slidesTiming[i].endTick + this.slidesTiming[i].startTick) / this.intervalCount);
        let startInterval = (this.slidesTiming[i].startTick / this.intervalCount);
        
        this.$refs.slideDurationSlideVisualizer[i].style.left = (startInterval + "%");
        this.$refs.slideDurationSlideVisualizer[i].style.top = (fromTop + 'px');
        this.$refs.slideDurationSlideVisualizer[i].style.width = ((endInterval - startInterval) + "%");
        fromTop += 5;
      }
    }, 

    renderCurrentTick(index){
      try{
        this.$refs.intervalSlideVisualizer[index].style.borderRight = '2px solid rgb(64, 201, 162)'
      }catch{

      }
      try{
        this.$refs.intervalSlideVisualizer[index - 1].style.borderRight = ''
      }catch{

      }
      
    },
  
    resetComponent(){
      this.currentTickIndex = 0;
      this.currentTick =0;
    }
  
  
  },

  computed: mapGetters(['getSlidePlayerData', 'getResetSlidePlayer']),

  created(){
    bus.$on("timerTick", (tick) => {
      console.log("new ticker")
      console.log(this.currentTickIndex);
      this.renderCurrentTick(this.currentTickIndex);
      this.currentTickIndex +=1;
      this.currentTick += this.interval;
    })
  },
  mounted(){
    
  },
  updated(){
    this.renderSlideDurations();
  },
  watch: {
    getSlidePlayerData: function(data){
      this.slideCount = data.slideCount;
      this.firstSlideStartTick = data.firstSlideStartTick;
      this.endTick = data.endTick;
      this.slidesTiming = data.slidesTiming;
      this.intervalWidth = data.intervalWidth;
      this.intervalCount = data.intervalCount;
      let intervalWidthAsPercentage = this.intervalWidth + "%";
      let root = document.documentElement;
      root.style.setProperty('--width', intervalWidthAsPercentage)
    },
    getResetSlidePlayer: function(resetCount){
      this.resetComponent()
    }
  }
}
</script>

<style scoped>
:root{
  --width: null;
}
.main-container-slideVisualizer{
  width: 100%;
  height: 100px;
  background-color: rgb(42, 50, 75);
  border-radius: 10px;
  display: flex;
  position: relative;
  box-shadow: 0 0 10px black;
}
.slide-duration-slideVisualizer{
  position: absolute;
  height: 3px;
  background-color: aliceblue;
}
.padding-container{
  display: flex;
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height:  calc(100% - 10px);
}
.interval-slideVisualizer{
  height: 90px;
  width: var(--width);
  z-index: 100;
}
</style>