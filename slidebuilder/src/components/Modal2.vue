<template>
<div class="main-container-modal2" @click="modalClick">
  <div class="btn-container-modal2" @click="expandModal" v-if="!showExpanded">
    <BtnRound>E</BtnRound>
  </div>
  <div class="move-modal2" v-if="showExpanded">
    <div class="modal-container-modal2">
      <div class="content-container-modal2">
        <div class="inner-content-container">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//Components
import BtnRound from '@/components/BtnRound.vue';

//Services
import { bus }from '@/services/Bus';

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
    BtnRound
  },
  data(){
    return {
      showExpanded: false,
      globalClickBlocked: false,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
    expandModal(){
      this.showExpanded = true;
    },
    modalClick(){
      this.globalClickBlocked = true;
    }
  },

  //computed: mapGetters(['allTodos']),

  created(){
    bus.$on("globalClick", (state) => {
      if(this.globalClickBlocked){
        this.globalClickBlocked = false;
      }else{
        if(this.showExpanded){
          console.log("Save updates")
        }
        this.showExpanded = false;
      };
    })

    bus.$on("closeModal2", (state) => {
      this.showExpanded = false;
    })
  },

}
</script>

<style scoped>
.main-container-modal2{
  position: relative;
  width: 30px;
  height: 30px;
}
.modal-container-modal2{
  
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: rgb(64, 201, 162);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);

  animation: expand 1s forwards;
}

.move-modal2{
  position: absolute;
  top:0;
  right: 0;
  z-index: 5;
  /* animation: moveLeft .5s forwards; */
}
.content-container-modal2{
  position: absolute;
  left: 7px;
  top: 7px;
  width: calc(100% - 14px);
  height: calc(100% - 14px);
  background-color: #22283C;
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  animation: fadein 2s forwards;
}

.inner-content-container{
  position: absolute;
  top:5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
}
.btn-container-modal2{
  z-index: 2;
}

@keyframes moveLeft {
  from {
    right: 0;
  }

  to {
    right: 200px;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes expand {
  from {
    width: 30px;
    height: 30px;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
    background-color: rgb(64, 201, 162);
  }

  to {
    width: 300px;
    height: 300px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    background-color: rgb(42, 50, 75);
  }
}
</style>