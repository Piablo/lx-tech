<template>
  <div class="main-container-expandable">
    <div class="header-container-expandable center-middle">{{title}}
      <div class="toggle-expand-expandable" @click="toggleExpand">v</div>
    </div>
    <div class="outer-content-expandable" v-if="showContent">
      <div class="inner-content-expandable">
        <slot name="content"></slot>
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
    'title'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      showContent: false,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
    toggleExpand(){
      this.showContent = !this.showContent;
    }
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
.main-container-expandable{
  width: 100%;
  background-color:  #2A324B;
  padding-bottom: 5px;
  border-radius: 10px;
  overflow: hidden;
}
.header-container-expandable{
  width: 100%;
  height: 30px;
  background-color: #2A324B;
  position: relative;
  color: #40C9A2;
}
.outer-content-expandable{
  width: calc(100% - 10px);
  background-color: rgba(255,255,255, .1);
  border-radius: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}
.toggle-expand-expandable{
  position: absolute;
  right: 5px;
  top:5px;
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
}
.inner-content-expandable{
  width: calc(100% - 10px);
  margin-left: 5px;
  padding-bottom: 5px;
}
</style>