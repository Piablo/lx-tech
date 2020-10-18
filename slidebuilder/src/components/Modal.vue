<template>
  <div class="main-container-modal center-middle">
    <div class="container-modal">
      <div class="header-container-modal">{{label}}
        <div class="close-btn-modal center-middle" @click="closeModal">x</div>
      </div>
      
      <div class="inner-container-modal">
        <router-view :name="routerView"></router-view>
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
import { mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);

export default {
  props: [
    'routerView',
    'label'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
    }
  },

  methods: {
    ...mapMutations(['toggleModal']),
    closeModal(){
      this.toggleModal(false)
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
.main-container-modal{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  
}
.container-modal{
  padding: 10px;
  background-color: rgb(64, 201, 162);
  border-radius: 15px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .5);
}
.header-container-modal{
  width: 100%;
  height: 30px;
  background-color:rgb(64, 201, 162);
  position: relative;
  font-weight: bold;
}
.inner-container-modal{
  border-radius: 15px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .3);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .5);
}
.close-btn-modal{
  height: 30px;
  width: 30px;
  position: absolute;
  top: -5px;
  right: 0;
  background-color:rgb(45, 140, 113);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
  border-radius: 10px;
  cursor: pointer;
}
.close-btn-modal:hover{
  transition: .3s;
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .5);
  color: rgb(64, 201, 162);

}
</style>