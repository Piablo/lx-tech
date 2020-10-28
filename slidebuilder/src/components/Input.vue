<template>
  <div class="main-container-input">
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
    'name',
    'input',
    'index'
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
        controlName: this.name,
        index: this.index
      }
      this.commitToStateDispatcher(payload);
    }
  },

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
    this.userInput = this.input;
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
  padding-left: 10px;
  margin-bottom: 5px;
  background-color:rgba(255, 255, 255, .3);
  border-style: none;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  outline-style: none;
  border-radius: 10px;
  color:rgba(255, 255, 255, .7);
  font-weight: bold;
}
.input-inputComponent::placeholder{
  color:rgba(255, 255, 255, .4);
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