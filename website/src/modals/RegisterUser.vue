<template>
  <div class="main-container-registerUser center-middle">
    <div class="padding-container-registerUser">
      <InputComponent placeholder="Email" :name="USER_EMAIL"></InputComponent>
      <InputComponent placeholder="Password" type="password" :name="USER_PASSWORD"></InputComponent>
      <Btn2 :name="SEND_REGISTRATION_DETAILS">Sign Me Up!</Btn2>
      <div class="spacer"></div>
      <Btn2>Signup with Gmail</Btn2>
      <div class="spacer"></div>
      <Btn2>Signup with Facebook</Btn2>
    </div>
    
  </div>
</template>

<script>
//Components
import InputComponent from '@/components/Input.vue';
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from "../store/registry.js";

//Vuex
//import { mapGetters, mapActions } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    InputComponent,
    Btn2
  },
  data(){
    return {
      USER_EMAIL: registry.USER_EMAIL,
      USER_PASSWORD: registry.USER_PASSWORD,
      SEND_REGISTRATION_DETAILS: registry.SEND_REGISTRATION_DETAILS,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
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
.main-container-registerUser{
  width: 300px;
  height: 255px;
  position: relative;
}
.padding-container-registerUser{
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.spacer{
  height: 10px;
}
</style>