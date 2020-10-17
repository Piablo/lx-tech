<template>
  <div id="app">
    <div v-if="showSpinner"><Spinner></Spinner></div>
    <router-view/>
  </div>
</template>

<script>
//Components
import Spinner from './components/Spinner.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters } from 'vuex';

export default {
  props: [
    'data'
  ],
  components: {
    Spinner
  },
  data(){
    return {
      showSpinner: false
    }
  },
  created(){
    this.showSpinner = this.getSpinnerState;
  },
  computed: mapGetters(['getSpinnerState']),

  watch:{
    getSpinnerState: function(state){
      debugger
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

</style>
