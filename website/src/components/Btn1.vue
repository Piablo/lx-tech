<template>
<div class="main-container-btn1">
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
.main-container-btn1{
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.main-container-btn1:hover{
  transition: .3s;
  color: rgb(45,45,45);
}
</style>