<template>
<div class="main-container-panel">
  <div class="toolbar-panel center-middle">
    <div class="btn-round-container-panel left-btn-round-panel">
      <slot name="leftbtn"></slot>
    </div>
    <div class="btn-round-container-panel right-btn-round-panel">
      <slot name="rightbtn"></slot>
    </div>
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
  /* position: relative;
  margin-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
  width: 200px; */
  
}
.toolbar-panel{
  width: 100%;
  height: 40px;
  background-color:rgb(64, 201, 162);
  position: relative;
  font-weight: bold;
  border-radius: 15px 15px 0 0;
}
.outer-content-panel{
  background-color: #40C9A2;
  padding-bottom: .54em;
  z-index: -1;
  border-radius: 0 0 15px 15px;
}
.inner-content-panel{
  border-radius: 15px;
  background-color: rgba(0, 0, 0, .3);
  box-shadow: inset 1px 1px 3px rgba(0, 0, 0, .5);
  z-index: 20;
  width: calc(100% - 1em);
  margin-left: .5em;
}

.btn-round-container-panel{
  position: absolute;
  width: 30px;
  height: 30px;
}
.left-btn-round-panel{
  Left: 10px;
}
.right-btn-round-panel{
  right: 10px;
}
.content-container-panel{
  padding: 5px;
  z-index: 1;
}
</style>