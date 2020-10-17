<template>
<div class="main-container-panel">
  <div class="toolbar-panel center-middle">
    <slot name="header"></slot>
  </div>
  <div class="outer-content-panel">
    <div class="inner-content-panel">
      <div class="content-container-panel">
        <slot name="content"></slot>
      </div>
      
    </div>
    
  </div>
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
    'props'
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
.main-container-panel{
  position: relative;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
}
.toolbar-panel{
  width: 100%;
  height: 2em;
  background-color: #40C9A2;
}
.outer-content-panel{
  background-color: #40C9A2;
  padding-bottom: .54em;
  
}
.inner-content-panel{
  width: calc(100% - 1em);
  margin-left: .5em;
  background-color: rgba(0,0,0, .4);
  border-radius: 10px;

}
.content-container-panel{
  padding: 5px;
}
</style>