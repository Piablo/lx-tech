<template>
  <div class="main-container-input">
    <div class="spacer-input"></div>
    <input class="input-inputComponent" :placeholder="placeholder" :type="type" @blur="pushInputData" v-model="userInput">
    <div class="error-input">{{errorMessage}}</div>
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
    'placeholder',
    'errorMessage',
    'type',
    'parentIndex',
    'name'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      userInput: null,
    }
  },

  methods: {
    ...mapMutations(['commitToStateDispatcher']),
    pushInputData(){
      let payload = {
        userInput: this.userInput,
        parentIndex: this.parentIndex,
        controlName: this.name
      }
      this.commitToStateDispatcher(payload);
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
.main-container-input{
  width: 100%;
  position: relative;
  height: 55px;
}
.input-inputComponent{
  width: calc(100% - 12px);
  height: 28px;
  border-radius: 5px;
  border-style: none;
  padding-left: 10px;
  outline-color: transparent;
  background-color: rgba(255,255,255, .1);
  outline-style: none;
  box-shadow: inset 0 0 2px rgba(255,255,255, 1);
  color: rgb(64, 201, 162);
  margin-bottom: 5px;
  
  /* cursor: pointer; */
}
.input-inputComponent::placeholder{
  color: rgba(255,255,255, .5);
}
.spacer-input{
  height: 5px;
}
.error-input{
  font-size: 13px;
  height: 13px;
  text-align: left;
  padding-left: 5px;
  color: rgb(241, 89, 70);
}
</style>