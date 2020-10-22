<template>
  <div class="main-container-controls" v-if="showSlides">
    <Btn2 :name="SAVE_SLIDES">Save</Btn2>
    <div class="spacer"></div>
    <div v-for="(slide, index) in slides" :key="index">
      <PanelComponent>
        <template v-slot:header>Card {{index + 1}}</template>
        <template v-slot:leftbtn>
          <div @click="insertAt(index)">
            <BtnRound>+</BtnRound>
          </div>
        </template>
        <template v-slot:rightbtn>
          <div @click="deleteAt(index)">
            <BtnRound>x</BtnRound>
          </div>
        </template>
        <template v-slot:content>
          <SlideEditor :index="index" :data="slide"></SlideEditor>
        </template>
      </PanelComponent>
      <div class="spacer"></div>
    </div>
    <div @click="insertAt('end')">
      <BtnRound>+</BtnRound>
    </div>
  </div>
</template>

<script>
//Components
import PanelComponent from '@/components/PanelComponent.vue';
import Icon from '@/components/Icon.vue';
import registry from '../store/registry';
import SlideEditor from '@/components/SlideEditor.vue';;
import { mapMutations, mapGetters } from 'vuex';
import Btn2 from '@/components/Btn2.vue';
import BtnRound from '@/components/BtnRound.vue';

//Services
//import { bus }from '@/services/Bus';


export default {
  props: [
    'props'
  ],
  components: {
    PanelComponent,
    Icon,
    SlideEditor,
    Btn2,
    BtnRound
  },
  data(){
    return {
      slides: [],
      showSlides: false,
      SAVE_SLIDES: registry.SAVE_SLIDES,
    }
  },

  methods: {
    ...mapMutations(['commitCardChangesToState']),
    deleteAt(index){
      let payload = {
        controlName: registry.DELETE_CARD,
        index: index
      }
      this.commitCardChangesToState(payload);
    },

    insertAt(index){
      if(index === 'end'){
        index = this.slides.length;
      }
      let payload = {
        controlName: registry.INSERT_CARD,
        index: index
      }
      this.commitCardChangesToState(payload);
    }
  },

  computed: mapGetters(['getSlides', 'getControlPanelState']),

  created(){
    //this.slides = this.getSlides;
    //debugger
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  watch: {
    getSlides: function(slides){
      this.slides = slides;
    },
    getControlPanelState: function(state){
      this.showSlides = state;
    }
  }
}
</script>

<style scoped>
.main-container-controls{
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
.spacer{
  height: 5px
}

</style>