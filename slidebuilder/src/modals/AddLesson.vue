<template>
<div class="main-container-addCourse">
  <div class="inner-container-addCourse">
    <div v-for="(lesson, index) in lessonsData" :key="index">{{lesson}}</div>
    <!-- <InputComponent placeholder="Course Name" :name="NEW_COURSE"></InputComponent>
    <Btn2 :name="SAVE_COURSE">Save</Btn2> -->
    <div @click="clickedIndex(lessonsData.length)" v-if="showEndButton"><BtnRound>+</BtnRound></div>
    <div class="input-component-addCourse" v-if="!showEndButton">
      <input class="input-addcourse" placeholder="Add Lesson Name" type="text" @blur="dispatchEntry" v-model="userInput">
    </div>
    <div class="spacer"></div>
    <div class="btn-container-addcourse" v-if="!showEndButton" @click="saveLesson">
      <Btn2>Save Lesson</Btn2>
    </div>
  </div>
  
</div>
</template>

<script>
//Components
import InputComponent from '@/components/Input.vue';
import BtnRound from '@/components/BtnRound.vue';
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry.js';

//Vuex
import { mapGetters, mapMutations } from 'vuex';

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
    InputComponent,
    BtnRound,
    Btn2
  },
  data(){
    return {
      
      ADD_LESSON: registry.ADD_LESSON,
      SAVE_LESSON: registry.SAVE_LESSON,
      NEW_LESSON: registry.NEW_LESSON,

      courses: null,
      lessonsData: null,
      showEndButton: true,
      userInput: null,
      activeIndex: null,
    }
  },

  methods: {
    ...mapMutations(['commitToStateDispatcher']),
    clickedIndex(index){
      if(index === this.lessonsData.length){
        this.showEndButton = false;
      }
      this.activeIndex = index;
    },
    saveLesson(){
      let payload = {
        controlName: this.SAVE_LESSON,
      }
      this.commitToStateDispatcher(payload);
    },
    dispatchEntry(){
      let payload = {
        userInput: this.userInput,
        controlName: this.NEW_LESSON,
        order: this.activeIndex
      }
      this.commitToStateDispatcher(payload);
    }
  },

  computed: mapGetters(['getLessonData']),

  created(){
    this.lessonsData = this.getLessonData;
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
}
</script>

<style scoped>
.main-container-addCourse{
  width: 200px;
  height: 115px;
  position: relative;
  
}
.inner-container-addCourse{
  position: absolute;
  top:10px;
  left:10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  
}
.input-component-addCourse{
  height: 30px;
  width: 100%;
  position: relative;
  /* background-color:rgb(64, 201, 162);
  border-radius: 10px;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  padding:2px; */

  /* animation-duration: .5s;
  animation-name: widen; */
}
.input-addcourse{
  position: absolute;
  left: 0;
  
  background-color:rgb(64, 201, 162);
  border-style: none;
  outline-color: transparent;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  padding-left: 10px;
  outline-style: none;
  height: 28px;
  border-radius: 10px;
  animation-duration: .5s;
  animation-name: widen;
  
  
}
.btn-container-addcourse{
  animation-duration: 1s;
  animation-name: fadin;
}
.spacer{
  height: 10px;
}

@keyframes widen {
  from {
    width: 23px;
  }

  to {
    width: calc(100% - 11px);
  }
}
@keyframes fadin {
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
}
</style>