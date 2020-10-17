<template>
<div class="main-container-icon">
  <img src="../assets/icons/trash.png" class="img-icon" alt="dave">
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

export default {
  props: [
    'icon'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
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
.main-container-icon{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}
.img-icon{
  width: 100%;
  height:100%
}
.main-container-icon:hover{
  transition: .3s;
  background-color: rgba(255,255,255, .4);
}
</style>