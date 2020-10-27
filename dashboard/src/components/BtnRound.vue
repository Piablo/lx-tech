<template>
  <div class="main-container-btnRound center-middle" @click="onClick()" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="icon-container-btnRound">{{data.icon}}</div>
    <div class="tooltip-container-btnRound" v-if="showTooltip">
      <div class="inner-tooltip-container-btnRound">{{data.tooltip}}</div>
    </div>
  </div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapMutations } from 'vuex';


//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70) FFC15E

export default {
  props: [
    'data',
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      showTooltip: false,
    }
  },

  methods: {
    ...mapMutations(['onButtonClick']),
    onClick( ){
      let payload = {
        parent: this.data.parent,
        name: this.data.name,
        clickLocation: {
          x: 100,
          y: 200
        }
      }
      this.onButtonClick(payload);
    },

    mouseEnter(){
      this.showTooltip = true;
    },
    mouseLeave(){
      this.showTooltip = false;
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
  position: relative;
  width: 30px;
  height: 30px;
  background-color:rgb(64, 201, 162);
  border-radius: 10px;
  box-shadow: 1px 1px 3px rgb(42, 50, 75);
  cursor: pointer;
}
.main-container-btnRound:hover{
  transition: .3s;
  box-shadow: inset 1px 1px 3px rgb(42, 50, 75);
}
.icon-container-btnRound{

}
.tooltip-container-btnRound{
  background-color: rgb(42, 50, 75);
  box-shadow: 1px 1px 5px black;
  position: absolute;
  border-radius: 10px;
  top:40px;
  left: 10px;
  color: white;
  padding: 10px;
  font-size: 12px;
}
.inner-tooltip-container-btnRound{
  width: 100px;
}
</style>