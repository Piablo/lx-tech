<template>
  <div class='main-container-grid'>
    <div class="inner-container-grid">
      <div v-for="rowIndex in  rowCount" :key="rowIndex" class="row-container-grid" ref="rowContainerGrid">
        <div v-for="columnIndex in  columnCount" :key="columnIndex" class="column-container-grid center-middle" @click="itemSelected(rowIndex - 1, columnIndex - 1)">{{gridData[rowIndex - 1][columnIndex - 1]}}
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
//Components
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapActions, mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'name',
    'btnColumnPosition'
  ],
  components: {
    Btn2
  },
  data(){
    return {
      rowCount: null,
      columnCount: null,
      gridData: null,
      showButton: false
    }
  },

  methods: {
    ...mapActions(['populateGrid']),
    ...mapMutations(['commitToStateDispatcher']),
    itemSelected(columnIndex, rowIndex){
      let payload = {
        controlName: this.name,
        columnIndex: columnIndex,
        rowIndex: rowIndex,
      }
      this.commitToStateDispatcher(payload);
    },
  },

  computed: mapGetters(['getGridData']),

  created(){
    if(this.btnColumnPosition === 'end'){
      this.showButton = true;
    }
    this.populateGrid(this.name);
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch:{
    getGridData: function(payload){
      if(this.name = payload.name){
        let data = payload.data;
        this.rowCount = data.length;
        this.columnCount = data[0].length;
        let columnWidthAsPercentage = (100 / this.columnCount) + '%';
        let root = document.documentElement;
        root.style.setProperty('--width', columnWidthAsPercentage)

        let count = 0;
        for(let c in data[0]){
          count = count + 1
        }
        this.gridData = data;
      }
    },
  }
}
</script>

<style scoped>
:root{
  --width: null;
}
.main-container-grid{
  width: 100%;
  height: 100%;
  position: relative;
}
.inner-container-grid{
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  position: absolute;
  left:10px;
  top:10px;
}
.row-container-grid{
  width:100%;
  background-color: aliceblue;
  height: 50px;
  display: flex;
}
.column-container-grid{
  width: var(--width);
  border-right: 1px solid rgb(200,200,200);
  cursor: pointer;
}
.row-container-grid:hover{
  transition: .3s;
  background-color: rgb(190,190,190);
}
</style>