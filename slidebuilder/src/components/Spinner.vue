<template>
<div class="main-container-spinner">
  <div class="container-spinner"></div>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

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

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  }
}
</script>

<style scoped>
.main-container-spinner{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, .5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-spinner{
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>