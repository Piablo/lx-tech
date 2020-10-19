<template>
<div class="main-container-bugLog">
  <div class="inner-container-bugLog">
    <Select placeholder="Select Type" :options="options" :name="TASK_TYPE"></Select>
    <TextArea placeholder="Describe the Bug" :name="TASK_INFO"></TextArea>
    <Btn2 :name="SAVE_TASK">Save</Btn2>
  </div>
</div>
</template>

<script>
//Components
import TextArea from '@/components/TextArea.vue';
import Select from '@/components/Select.vue';
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry.js';

//Vuex
// import { mapGetters, mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);
//Baby blue eyes = rgb(175, 203, 255);

export default {
  props: [
    'props'
  ],
  components: {
    TextArea,
    Select,
    Btn2
  },
  data(){
    return {
      TASK_INFO: registry.TASK_INFO,
      SAVE_TASK: registry.SAVE_TASK,
      TASK_TYPE: registry.TASK_TYPE,

      options: [
        {label: 'Task', id: 1},
        {label: 'Bug', id: 2}
      ]
    }
  },

  methods: {
    // ...mapMutations(['commitToStateDispatcher']),
    
  },

  // computed: mapGetters(['getLessonData']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
}
</script>

<style scoped>
.main-container-bugLog{
  width: 300px;
  height: 250px;
  position: relative;
  
}
.inner-container-bugLog{
  position: absolute;
  top:10px;
  left:10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  
  
}
</style>