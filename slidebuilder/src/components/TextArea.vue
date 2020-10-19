<template>
  <div class="main-container-textArea">
    <textarea class="text-area-textArea" @blur="updateState" v-model="userInput"></textarea>
  </div>
</template>

<script>

//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';
import { mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'name',
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
    updateState(){
      let payload = {
        controlName: this.name,
        userInput: this.userInput,
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
.main-container-textArea{
  width: 100%;
  height: 135px;
  background-color:rgb(64, 201, 162);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  border-radius: 10px;
  margin-bottom: 10px;
}
.text-area-textArea{
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  margin-top: 3px;
  border-radius: 5px;
  
  border-style: none;
  outline-color: transparent;
  background-color: inherit;
  outline-style: none;
  resize: none;
  font-family: 'Roboto';
}
</style>