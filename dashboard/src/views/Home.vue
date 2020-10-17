<template>
<div class="main-component-home">
  <Mindmap></Mindmap>
</div>
</template>

<script>
//Components
import Mindmap from '@/components/Mindmap.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    Mindmap
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
.main-component-home{
  width: 100%;
  height: 100vh;
  background-color: #2A324B;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>