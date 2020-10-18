<template>
<div class="main-container-home">
  <div class="toolbar-home">
    <div class="round-btn-container-home">
      <BtnRound>B</BtnRound>
    </div>
    <div class="round-btn-container-home"></div>
    <div class="logo-container-home center-middle"><span id="logo">LX</span> - tech</div>
  </div>
  <div class="treeview-container-home">
    <Card>
      <Treeview :name="COURSE_TREEVIEW"></Treeview>
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
import registry from '../store/registry';
import BtnRound from '@/components/BtnRound.vue';

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapActions, mapGetters } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    Card,
    Treeview,
    Player,
    Controls,
    BtnRound
  },
  data(){
    return {
      COURSE_TREEVIEW: registry.COURSE_TREEVIEW,
    }
  },

  methods: {
    ...mapActions(['getTreeviewDataFromDb'])
  },

  //computed: mapGetters(['getTreeviewData']),

  created(){
    let parentId = 0;
    this.getTreeviewDataFromDb(parentId); 
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  
}
</script>

<style scoped>
.toolbar-home{
  position: relative;
  width: calc(100% - 14px);
  height: 30px;
  background-color: #2A324B;
  box-shadow: 0 0 3px rgba(0, 0, 0, 1);
  border-radius: 15px;
  padding: 7px;
  display: flex;
}
.main-container-home{
  width: 100%;
  height: 100vh;
  background-color: #2A324B;
  position: relative;
}
.treeview-container-home{
  position: absolute;
  top: 50px;
  left: 0;
  width: 300px;
  height: calc(100% - 50px);
}
.controls-container-home{
  position: absolute;
  top: 50px;
  right: 0;
  width: 300px;
  height: calc(100% - 50px);
}
.player-container-home{
  position: absolute;
  top: 50px;
  left: 305px;
  width: calc(100% - 300px - 300px - 10px);
  height: calc(100% - 50px);
}
.round-btn-container-home{
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
.logo-container-home{
  position: absolute;
  right: 10px;
  width: 300px;
  height: 30px;
  color: rgb(241, 89, 70);
  color: rgb(241, 89, 70);
  color: rgb(241, 89, 70);
  font-weight: bold;
}
#logo{
  font-size: 25px;
}
</style>