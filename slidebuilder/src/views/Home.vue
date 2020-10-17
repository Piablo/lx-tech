<template>
<div class="main-container-home">
  <div class="treeview-container-home">
    <Card>
      <Treeview :data="allCourses"></Treeview>
    </Card>
  </div>
  <div class="controls-container-home">
    <Card>
      <Controls></Controls>
    </Card>
  </div>
  <div class="player-container-home">
    <Card>
      <Player></Player>
    </Card>
  </div>
</div>
</template>

<script>
//Components
import Card from '@/components/Card.vue';
import Treeview from '@/components/Treeview.vue';
import Player from '@/components/Player.vue';
import Controls from '@/components/Controls.vue';

//Services
//import { bus }from '@/services/Bus';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    Card,
    Treeview,
    Player,
    Controls
  },
  data(){
    return {
      allCourses: [
        {label: 'course 1', level: 0, activeIndex: true, id: 0},
        {label: 'lesson 1', level: 1, activeIndex: false, id: 1},
        {label: 'lesson 2', level: 1, activeIndex: false, id: 2},
        {label: 'lesson 3', level: 1, activeIndex: false, id: 3},
        {label: 'course 2', level: 0, activeIndex: false, id: 4},
        {label: 'course 3', level: 0, activeIndex: false, id: 5},
        {label: 'course 4', level: 0, activeIndex: false, id: 6}
      ]
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
.main-container-home{
  width: 100%;
  height: 100vh;
  background-color: #2A324B;
  position: relative;
}
.treeview-container-home{
  width: 300px;
  height: 100%;
}
.controls-container-home{
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
}
.player-container-home{
  position: absolute;
  top: 0;
  left: 305px;
  width: calc(100% - 300px - 300px - 10px);
  height: 100%; 
}
</style>