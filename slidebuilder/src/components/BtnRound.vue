<template>
<div class="main-container-btnRound center-middle" @click="btnRoundClick">
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
    'name',
    'index'
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
    btnRoundClick(){
      let payload = {
        controlName: this.name,
        index: this.index
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
.main-container-btnRound{
  width: 30px;
  height: 30px;
  background-color:rgb(64, 201, 162);
  border-radius: 10px;
  color: rgb(42, 50, 75);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
}
.main-container-btnRound:hover{
  transition: .3s;
  color:rgba(0, 0, 0, .5);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  
}
</style>