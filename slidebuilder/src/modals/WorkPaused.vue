<template>
<div class="main-container-workpaused center-middle">
  <div class="content-container-workpaused">
    <div class="countdown-workpaused center-middle">{{countdown}}</div>
    <div class="button-container-workpaused">
      <Btn2 :name="STILL_WORKING">Im still working</Btn2>
    </div>
  </div>
</div>
</template>

<script>
//Components
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry';

//Vuex
import { mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'props'
  ],
  components: {
    Btn2
  },
  data(){
    return {
      countdown: 60,

      STILL_WORKING: registry.STILL_WORKING
    }
  },

  methods: {
    ...mapActions(['pauseActiveTask'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  mounted(){
    this.timer = setInterval(function(){
      if(this.countdown === 0){
        this.pauseActiveTask();
      }
      this.countdown -= 1;
    }.bind(this), 1000)
  }
}
</script>

<style scoped>
.main-container-workpaused{
  width: 300px;
  height: 300px;
}
.countdown-workpaused{
  width: 150px;
  height: 100px;
  font-size: 70px;
  color: rgb(241, 89, 70);
}
.button-container-workpaused{
  width: 150px;
  height: 40px;
}
</style>