<template>
<div class="main-container-btn2 center-middle" @click="btn2Click">
  <slot></slot>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);

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
    ...mapMutations(['commitToStateDispatcher']),
    btn2Click(){
      let payload = {
        controlName: this.name
      }
      this.commitToStateDispatcher(payload);
    }
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
  background-color: rgb(175, 203, 255);
  background-color:#2E2E3A;
  border-radius: 10px;
  color:rgb(64, 201, 162);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
}
.main-container-btn2:hover{
  transition: .3s;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
}
</style>