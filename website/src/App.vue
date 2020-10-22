<template>
  <div id="app">
    <div class="modal-container-app" v-if="showModalDiv">
      <Modal :routerView="modalRouteName" :label="modalLabel"></Modal>
    </div>
    <router-view/>
  </div>
</template>

<script>
//Components
import Modal from './components/Modal.vue';

//Vuex
import { mapGetters } from 'vuex';

export default {
  props: [
    'data'
  ],
  components: {
    Modal
  },
  data(){
    return {
      showModalDiv: false,
      modalRouteName: null,
      modalLabel: null,
    }
  },

  methods:{

  },
  created(){
    
  },
  mounted(){

  },

  watch:{
    getModalState: function(modal){
      this.showModalDiv = modal.show;
      this.modalRouteName = modal.route;
      this.modalLabel = modal.label;
    },
  },
  computed: mapGetters(['getModalState'])


}

</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
   url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}

#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
body{
  padding:0;
  margin:0;
}

.modal-container-app{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
}
.center-middle{
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
