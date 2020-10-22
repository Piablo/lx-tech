<template>
  <div class="main-container-home">
    <div class="toolbar-container-home">
      <div class="button-wrapper-home">
        <Btn1 :name="LOGIN_USER">Login</Btn1>
      </div>
      <div class="button-wrapper-home">
        <Btn1 :name="REGISTER_USER">Sign up</Btn1>
      </div>
    </div>
  </div>
</template>

<script>
//Components
import Btn1 from '@/components/Btn1.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry.js';

//Vuex
import { mapGetters } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    Btn1,
  },
  data(){
    return {
      LOGIN_USER: registry.LOGIN_USER,
      REGISTER_USER: registry.REGISTER_USER,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  computed: mapGetters(['getRoute']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch:{
    getRoute: function(route){
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.main-container-home{
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg,#40C9A2,#2A324B);
}
.toolbar-container-home{
  width: 100%;
  height: 4em;
}
.button-wrapper-home{
  margin-top: .5em;
  margin-right: 1em;
  width: 100px;
  height: 3em;
  float: right;
}
</style>