<template>
  <div class="main-component-home">
    <div class="toolbar-container-home">
      <Toolbar></Toolbar>
      <BtnAnimation></BtnAnimation>
    </div>
  </div>
</template>

<script>
//Components
import Toolbar from '@/components/Toolbar';
import BtnAnimation from '@/components/BtnAnimation';

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';


//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70) FFC15E

export default {
  props: [
    'props'
  ],
  components: {
    Toolbar,
    BtnAnimation
  },
  data(){
    return {
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  }
}
</script>

<style scoped>
.main-component-home{
  width: 100%;
  height: 100vh;
  background-color: #2A324B;
}
.toolbar-container-home{
  width: 100%;
  height: 40px;
  background-color: rgb(64, 201, 162);
}
</style>