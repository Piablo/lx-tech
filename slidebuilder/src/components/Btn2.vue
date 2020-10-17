<template>
<div class="main-container-btn2 center-middle">
  <slot></slot>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);

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
.main-container-btn2{
  width: 100%;
  height: 35px;
  background-color: rgb(241, 89, 70);
  border-radius: 10px;
  color: rgb(42, 50, 75);
  font-weight: bold;
  cursor: pointer;
}
.main-container-btn2:hover{
  transition: .3s;
  background-color: rgb(64, 201, 162)
}
</style>