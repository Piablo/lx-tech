<template>
  <div id="app">
    <div v-if="showSpinner"><Spinner></Spinner></div>
    <div class="modal-container-app" v-if="showModal">
      <Modal :routerView="modalRouteName" :label="modalLabel"></Modal>
    </div>
    <router-view/>
  </div>
</template>

<script>
//Components
import Spinner from './components/Spinner.vue';
import Modal from './components/Modal.vue';

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters } from 'vuex';

export default {
  props: [
    'data'
  ],
  components: {
    Spinner,
    Modal
  },
  data(){
    return {
      showSpinner: false,
      showModal: false,
      modalRouteName: null,
      modalLabel: null,
    }
  },
  created(){
    this.showSpinner = this.getSpinnerState;
  },
  computed: mapGetters(['getSpinnerState', 'getModalState']),

  watch:{
    getSpinnerState: function(state){
      this.showSpinner = state;
    },

    getModalState: function(modal){
      this.showModal = modal.show;
      this.modalRouteName = modal.route;
      this.modalLabel = modal.label;
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
   url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}

#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
body {
  padding: 0;
  margin: 0;
}
.content-container{
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.center-middle{
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container-app{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
}

</style>
