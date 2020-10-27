<template>
  <div class="main-container-playerControls">
    <div class="btn-container-playerControls">
      <div @click="playPause">
        <BtnRound>></BtnRound>
      </div>
      <div class="spacer"></div>
      <div @click="resetSlidePlayerStatus">
        <BtnRound>R</BtnRound>
      </div>
      

      <div class="tick-counter-playerControls center-middle">{{currentTick}}</div>
    </div>
  </div>
</template>

<script>
//Components
import BtnRound from '@/components/BtnRound.vue'

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
    BtnRound
  },
  data(){
    return {
      startTick: 0,
      currentTick: 0,
      endTick: null,
      timer: null,
      interval: 100,
      playing: false,
    }
  },

  methods: {
    ...mapMutations(['setSlidePlayerStatus', 'resetSlidePlayerStatus']),
    playPause(){
      this.playing = !this.playing;
      this.setSlidePlayerStatus(this.playing);
    },

    play(){
      this.timer = setInterval(function(){
        console.log("timer4")
        bus.$emit('timerTick', this.currentTick);
        if(this.currentTick === this.endTick){
          this.resetSlidePlayerStatus();
          return
        }
        this.currentTick += this.interval;
      }.bind(this), this.interval);
    },

    pause(){
      clearInterval(this.timer);
    },
    resetComponent(){
      this.currentTick = 0;
      this.playing = false;
      this.setSlidePlayerStatus(this.playing);
    }
  },

  computed: mapGetters(['getSlidePlayerData', 'getSlidePlayerStatus', 'getResetSlidePlayer']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },

  watch: {
    getSlidePlayerData: function(data){
      this.endTick = data.endTick;
    },
    getSlidePlayerStatus: function(status){
      if(status){
        this.play();
      }else{
        this.pause();
      }
    },
    getResetSlidePlayer: function(resetCount){
      this.resetComponent()
    }
  }
}
</script>

<style scoped>
.main-container-playerControls{
  position: relative;
  width: 100%;
  height: 40px;
  background-color: rgb(42, 50, 75);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 0 10px black;
}
.btn-container-playerControls{
  position: absolute;
  top:5px;
  left:5px;
  width: calc(100% - 10px);
  height: 30px;
  display: flex;
}
.spacer{
  width: 5px;
}
.tick-counter-playerControls{
  position: absolute;
  right: 0;
  width: 100px;
  height: 30px;
  background-color: rgba(255,255,255, .3);
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px black;
  color: rgba(255,255,255, .8)
}
</style>