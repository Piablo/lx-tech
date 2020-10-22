<template>
  <div class="main-container-expandable" ref="mainContainerExpandable">
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
      if(this.showContent){
        this.$refs.mainContainerExpandable.style.paddingBottom = "5px";
      }else{
        this.$refs.mainContainerExpandable.style.paddingBottom = "0";
      }
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
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .8), -1px -1px 1px rgba(255,255,255,.2);
  /* padding-bottom: 5px; */
  border-radius: 15px;
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
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 1)
  /* padding-bottom: 5px; */
}
.toggle-expand-expandable{
  position: absolute;
  right: 2px;
  top:3px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .8), -1px -1px 1px rgba(255,255,255,.2);
}
.toggle-expand-expandable:hover{
  transition: .3s;
  box-shadow: -1px -1px 1px rgba(0, 0, 0, .8), 1px 1px 1px rgba(255,255,255,.2);
}
.inner-content-expandable{
  width: calc(100% - 10px);
  margin-left: 5px;
  padding-bottom: 5px;
  animation-duration: .5s;
  animation-name: expandHeight;
  
}

@keyframes expandHeight {
  from {
    height: 0;
  }

  to {
    height: 110px;
  }
}
</style>