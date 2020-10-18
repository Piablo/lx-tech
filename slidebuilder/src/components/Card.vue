<template>
<div class="main-container-card" ref="mainContainerCard">
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

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);
//Baby blue eyes = rgb(175, 203, 255);

export default {
  props: [
    'colorName'
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
  },
  mounted(){
    if(this.colorName === 'baby-blue-eyes'){
      this.$refs.mainContainerCard.style.backgroundColor = 'rgb(175, 203, 255)'
    }
  }
}
</script>

<style scoped>
.main-container-card{
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  background-color: rgba(42, 50, 75, .7);
  border-radius: 15px;
  position: relative;
}
.inner-container-card{
  position: absolute;
  top: 7px;
  left: 7px;
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  background-color: rgba(0, 0, 0, .2);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .7);
  border-radius: 15px;
}
</style>