<template>
  <div class="main-container-loginUser center-middle">
    <div class="padding-container-loginUser">
      <InputComponent placeholder="Email" :name="USER_EMAIL"></InputComponent>
      <InputComponent placeholder="Password" type="password" :name="USER_PASSWORD"></InputComponent>
      <Btn2 :name="SEND_LOGIN_DETAILS">Login</Btn2>
      <div class="spacer"></div>
      <Btn2>Login with Gmail</Btn2>
      <div class="spacer"></div>
      <Btn2>Login with Facebook</Btn2>
    </div>
  </div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'
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
      SEND_LOGIN_DETAILS: registry.SEND_LOGIN_DETAILS,
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
.main-container-loginUser{
  width: 300px;
  height: 255px;
  position: relative;
}
.padding-container-loginUser{
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}
.spacer{
  height: 10px;
}
</style>