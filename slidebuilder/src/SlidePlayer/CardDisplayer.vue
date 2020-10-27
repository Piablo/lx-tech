<template>
  <div class="main-container-cardDisplayer" v-if="showSlide">DAve</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'slideData',
    'slideIndex',
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      showSlide: false,
      tick: 0,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  
  },

  //computed: mapGetters(['allTodos']),

  created(){
    bus.$on("timerTick", (tick) => {
      if(this.slideData.timing.startTick === tick){
        console.log("Start")
        this.showSlide = true;
      }
      if((this.slideData.timing.endTick + this.slideData.timing.startTick) === tick){
        console.log("end")
        this.showSlide = false;
      }
    })
  },
  mounted(){
  }
}
</script>

<style scoped>
.main-container-cardDisplayer{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: blue;
}
</style>