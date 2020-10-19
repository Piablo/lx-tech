<template>
<div class="main-container-taskList">
  <Grid :name="TASK_GRID"></Grid>
</div>
</template>

<script>
//Components
import Grid from '@/components/Grid.vue';
import registry from '../store/registry';

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'props'
  ],
  components: {
    Grid
  },
  data(){
    return {
      TASK_GRID: registry.TASK_GRID,
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
.main-container-taskList{
  width: 500px;
  height: 500px;
}
</style>