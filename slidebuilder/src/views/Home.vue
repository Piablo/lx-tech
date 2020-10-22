<template>
<div class="main-container-home">
  <div class="toolbar-home">
    <div class="round-btn-container-home">
      <BtnRound :name="TASK_LOG">T</BtnRound>
    </div>
    <div class="round-btn-container-home"></div>
    <div class="current-task-container-home center-middle" v-if="showTaskNumber">Current task - <span  @click="showTasklistModal" class="ticket-number-home"> {{taskId}}</span></div>
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
// import { bus }from '@/services/Bus';

//Vuex
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    Card,
    Treeview,
    Player,
    Controls,
    BtnRound,
    
  },
  data(){
    return {
      COURSE_TREEVIEW: registry.COURSE_TREEVIEW,
      TASK_LOG: registry.TASK_LOG,
      showTaskNumber: false,
      taskId: null,
    }
  },

  methods: {
    ...mapActions(['getTreeviewDataFromDb']),
    ...mapMutations(['showModal']),

    showTasklistModal(){
      let details = {
          route: 'taskList',
          headline: 'Select the task you are working on'
        }
      this.showModal(details)
    }
  },

  computed: mapGetters(['getCurrentTask', 'getShowTaskModal', 'getUserDetails']),

  created(){
    
    
  },

  watch:{
    getUserDetails: function(current){
      let parentId = 0;
      this.getTreeviewDataFromDb(parentId); 
    },
    getCurrentTask: function(current){
      this.taskId = current.ticketNumber;
      this.showTaskNumber = true;
    },

    getShowTaskModal: function(state){
      if(state){
        this.showTasklistModal();
      }
    }

  }
  
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
  width: 150px;
  height: 30px;
  color: rgb(241, 89, 70);
  color: rgb(241, 89, 70);
  color: rgb(241, 89, 70);
  border-radius: 15px;
  
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  font-weight: bold;
}
.current-task-container-home{
  position: absolute;
  right: 170px;
  width: 250px;
  height: 30px;
  color: rgb(200,200,200);
  font-size: 13px;
}
#logo{
  font-size: 25px;
}
.ticket-number-home{
  color: rgb(64, 201, 162);
  font-size: 18px;
  cursor: pointer;
}
</style>