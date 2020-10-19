<template>
  <div class='main-container-grid'>this is a grid</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'name'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
    }
  },

  methods: {
    ...mapActions(['populateGrid'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    this.populateGrid(this.name);
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  }
}
</script>

<style scoped>
.main-container-grid{
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, .4);
}
</style>