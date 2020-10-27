<template>
  <div class="main-container-btnAnimation"></div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters } from 'vuex';


//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70) FFC15E

export default {
  props: [
    'props'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  computed: mapGetters(['getAnimationPanelData', 'getShowAnimatedPanel']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch:{
    getAnimationPanelData: function(data){
      debugger
    },
    getShowAnimatedPanel: function(show){
      debugger
    }
  }
}
</script>

<style scoped>
.main-container-btnAnimation{
  color: white;
}
</style>