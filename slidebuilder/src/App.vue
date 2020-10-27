<template>
  <div id="app" @click="globalClick">
    <div v-if="showSpinner"><Spinner></Spinner></div>
    <div class="modal-container-app" v-if="showModalDiv">
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
import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapActions, mapMutations} from 'vuex';

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
      showModalDiv: false,
      modalRouteName: null,
      modalLabel: null,
      timer: null,
      clock: 0,
      minsInactive: 0,
      pauseAfterMins: 10
    }
  },
  created(){
    this.showSpinner = this.getSpinnerState;
    this.getUserDetailsOnLoad()

  },
  mounted(){
    //this.startActivityTimer();
    //this.setUserDetailsOnLoad();

  },
  computed: mapGetters(['getSpinnerState', 'getModalState','getStartActivityTimerState', 'getUserDetails']), 

  methods:{
    ...mapActions(['checkForActiveTask', 'setUserDetailsOnLoad']),
    ...mapMutations(['showModal']),
    globalClick(){
      bus.$emit('globalClick', true);
      this.minsInactive = 0;
      this.clock = 0;
    },

    getUserDetailsOnLoad(){
      var params = location.href.split('?')[1].split('#');
      let userId = parseInt(params[0]);
      this.setUserDetailsOnLoad(userId);
    },

    startActivityTimer(){

      this.clock = 0;
      this.minsInactive = 0;
      
      this.timer = setInterval(function(){  
        console.log("timer2")

        if(this.clock === 60){
          this.minsInactive += 1;
          this.clock = 0
        }
        if(this.minsInactive === this.pauseAfterMins){ 
          let payload = {
            route: 'workPaused',
            headline: 'You forgot to Pause your current task.'
          }
          this.showModal(payload);
          clearTimeout(this.timer);
        }
        this.clock += 1;

      }.bind(this), 1000)
    }
  },
  destroyed(){
    clearTimeout(this.timer)
  },

  watch:{
    getSpinnerState: function(state){
      this.showSpinner = state;
    },

    getModalState: function(modal){
      this.showModalDiv = modal.show;
      this.modalRouteName = modal.route;
      this.modalLabel = modal.label;
    },
    getStartActivityTimerState: function(state){
      if(state){
        //this.startActivityTimer();
      }
    },
    getUserDetails: function(userDetails){
      this.checkForActiveTask();
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
