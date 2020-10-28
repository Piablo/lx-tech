<template>
  <div class="main-container-twoInput">
    <div class="half-twoInput">
      <slot name='left'></slot>
    </div>
    <div class="half-twoInput r-twoInput">
      <slot name='right'></slot>
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
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

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
.main-container-twoInput{
  width: 100%;
  position: relative;
  height: 30px;
}
.half-twoInput{
  width: calc(50% - 2px);
  position: absolute;
  top: 0;
  height: 30px;
}
.r-twoInput{
  right: 0;
}
</style>