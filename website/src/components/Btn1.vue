<template>
<div class="main-container-btn1" @click="onClick">
  <slot></slot>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapMutations } from 'vuex';

export default {
  props: [
    'name'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {

    }
  },

  methods: {
    ...mapMutations(['dispatchToState']),

    onClick(){
      let payload = {
        controlType: 'button',
        controlName: this.name,
      }
      this.dispatchToState(payload);
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
.main-container-btn1{
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
.main-container-btn1:hover{
  transition: .3s;
  color: rgb(45,45,45);
}
</style>