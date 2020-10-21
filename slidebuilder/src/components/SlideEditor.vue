<template>
  <div>
    <ExpandablePanel title="Timing">
      <template v-slot:content>
        <InputComponent placeholder="Start Tick" :name="START_TICK" :parentIndex="index" :input="startTickData"></InputComponent>
        <InputComponent placeholder="End Tick" :name="END_TICK" :parentIndex="index" :input="endTickData"></InputComponent>
      </template>
    </ExpandablePanel>
    <div class="spacer"></div>
    <ExpandablePanel title="Timing"></ExpandablePanel>
    <div class="spacer"></div>
    <ExpandablePanel title="Timing"></ExpandablePanel>
    <div class="spacer"></div>
    
  </div>
</template>

<script>
//Components
import ExpandablePanel from '@/components/ExpandablePanel.vue';
import InputComponent from '@/components/Input.vue';
import registry from '../store/registry.js';

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapActions } from 'vuex';

export default {
  props: [
    'index',
    'data'
  ],
  components: {
    ExpandablePanel,
    InputComponent,

  },
  data(){
    return {
      START_TICK: registry.START_TICK,
      END_TICK: registry.END_TICK,

      startTickData: null,
      endTickData: null,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    this.startTickData = this.data.timing.startTick;
    this.endTickData = this.data.timing.endTick;
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  }
}
</script>

<style scoped>
.spacer{
  height: 5px;
}
</style>