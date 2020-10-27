<template>
<div class="main-container-toolbar">
  <div class="inner-container-toolbar">
    <div class="left-buttons-container">
      <div v-for="(button, index) in leftButtons" :key="index">
        <div class="button-container-toolbar float-left-toolbar">
          <BtnRound :data="button.data"></BtnRound>
        </div>
      </div>
    </div>

    <div class="right-buttons-container">
      <div v-for="(button, index) in rightButtons" :key="index">
        <div class="button-container-toolbar float-right-toolbar"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//Components
import BtnRound from '@/components/BtnRound.vue';
import BtnAnimation from '@/components/BtnAnimation';

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
    'props'
  ],
  components: {
    BtnRound,
    BtnAnimation
  },
  data(){
    return {
      leftButtons: [1,2,3],
      rightButtons: [1,2,3],
    }
  },

  methods: {
    // ...mapMutations(['onButtonClick'])
  },

  computed: mapGetters(['getLeftToolbarButtons']),

  created(){
    this.leftButtons = this.getLeftToolbarButtons;
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch: {
    // getLeftToolbarButtons: function(buttons){
    //   debugger
    // }
  }
}
</script>

<style scoped>
.main-container-toolbar{
  position: relative;
  width: 100%;
  height: 40px;
}
.inner-container-toolbar{
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: 30px;
}
.button-container-toolbar{
  width: 30px;
  height: 30px;
}
.left-buttons-container{
  display: flex
}
.float-left-toolbar{
  margin-right: 5px;
  
}
.float-right-toolbar{
  margin-left: 5px;
  
}
.right-buttons-container{
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}
</style>