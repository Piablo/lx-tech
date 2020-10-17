<template>
<div class="main-container-card">
  <div class="inner-container-card">
    <div class="content-container">
      <slot></slot>
    </div>
  </div>
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
.main-container-card{
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, .2);
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  border-radius: 15px;
  position: relative;
}
.inner-container-card{
  position: absolute;
  top: 15px;
  left: 15px;
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  background-color: rgba(42, 50, 75, .8);
  box-shadow: inset 0 0 5px rgba(255,255,255, .2);;
  border-radius: 15px;
}
</style>