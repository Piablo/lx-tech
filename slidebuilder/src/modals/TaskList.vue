<template>
<div class="main-container-taskList">
  <div class="grid-container-taskList">
    <Grid :name="TASK_GRID"></Grid>
  </div>
  <div class="buttons-container-tasklist">
    <div v-for="rowIndex in  rowCount" :key="rowIndex">
      <div class="inner-button-tasklist">
        <Modal2 :props="modal2Props">
          <div class="task-detail-tasklist">
            <div class="toolbar-task-detail-taskList">
              <div class="button-container-taskDetail-taskList" @click="globalClick">
                <BtnRound :colors="closeModalButtonOverrides">u</BtnRound>
              </div>
            </div>
            <div class="spacer"></div>
            <Select :options="options" placeholder="Change Task Status" :name="TASK_STATUS" :index="(rowIndex - 1)"></Select>
          </div>
        </Modal2>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
//Components
import Grid from '@/components/Grid.vue';
import Modal2 from '@/components/Modal2.vue';
import BtnRound from '@/components/BtnRound.vue';
import Select from '@/components/Select.vue';

//Services
import { bus }from '@/services/Bus';
import registry from '../store/registry';

//Vuex
import { mapGetters } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'props'
  ],
  components: {
    Grid,
    Modal2,
    BtnRound,
    Select
  },
  data(){
    return {
      TASK_GRID: registry.TASK_GRID,
      TASK_STATUS: registry.TASK_STATUS,

      rowCount: null,

      modal2Props: {
        width: '100px',
        height: '100px'
      },

      options: [
        {label: 'close', id: 1},
        {label: 'pause', id: 2}
      ],

      closeModalButtonOverrides:{
        backgroundColor: '#2E2E3A',
        color: 'rgb(64, 201, 162)'
      }


      
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])

    globalClick(){
      bus.$emit('globalClick', true);
    }
  },

  computed: mapGetters(['getGridData']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },

  watch: {
    getGridData: function(gridData){
      this.rowCount = gridData.data.length;
    }
  }
}
</script>

<style scoped>
.main-container-taskList{
  width: 900px;
  height: 500px;
  position: relative;
  overflow: auto; 
}
.grid-container-taskList{
  width: calc(100% - 50px);
  height: 100%;
}
.buttons-container-tasklist{
  position: absolute;
  right: 10px;
  top:10px;
  width: 50px;
  height: calc(100% - 10px);
}
.inner-button-tasklist{
  background-color: aliceblue;
  height: 40px;
  padding: 0 10px;
  padding-top: 10px;
  z-index: 100;
}
.task-detail-tasklist{
  position: relative;
  width: 100%;
  height: 100%;
}
.toolbar-task-detail-taskList{
  width: 100%;
  height: 30px;
  position: relative;
}
.button-container-taskDetail-taskList{
  position: absolute;
  right:0;
}
.spacer{
  height: 5px;
}
</style>