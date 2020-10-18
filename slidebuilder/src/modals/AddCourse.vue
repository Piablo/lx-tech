<template>
<div class="main-container-addCourse">
  <div class="inner-container-addCourse">
    <InputComponent placeholder="Course Name" :name="NEW_COURSE"></InputComponent>
    <Btn2 :name="SAVE_COURSE">Save</Btn2>
  </div>
  
</div>
</template>

<script>
//Components
import InputComponent from '@/components/Input.vue';
import Btn2 from '@/components/Btn2.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry.js';

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
    InputComponent,
    Btn2
  },
  data(){
    return {
      courses: null,
      SAVE_COURSE: registry.SAVE_COURSE,
      NEW_COURSE: registry.NEW_COURSE
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  // computed: mapGetters(['getCourses']),

  created(){
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
</style>