<template>
<div class="main-container-mindmap center-middle">
  <div class="toolbar-mindmap center-middle">Hi {{user}}... Welcome back!</div>
  <div class="level-1-container-mindmap center-middle">Full Stack</div>
  <div class="level-2-container-mindmap center-middle" @click="navTo('vue')">Vue</div>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//Vuex
import { mapActions } from 'vuex';

export default {
  props: [
    'props'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      user: "Paul"
    }
  },

  methods: {
    ...mapActions(['fetchCourse']),
    navTo(course){
      this.fetchCourse(course)
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
.main-container-mindmap{
  width: 100%;
  height: 100%;
  position: relative;
}
.level-1-container-mindmap{
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background-color: #F15946;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 10px 10px 20px #181D2B
}
.level-2-container-mindmap{
  position: absolute;
  top: 30%;
  left: 30%;
  width: 6em;
  height: 6em;
  background-color: #3FB984;
  font-weight: bold;
  font-size: 20px;
  border-radius: 50%;
  box-shadow: 10px 10px 20px #181D2B;
  cursor: pointer;
}
.toolbar-mindmap{
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 4em;
  color: #40C9A2;
  font-weight: bold;
  font-size: 2em;
}
</style>


