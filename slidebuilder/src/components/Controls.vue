<template>
  <div class="main-container-controls" v-if="showSlides">
    <Btn2 :name="SAVE_SLIDES">Save</Btn2>
    <div class="spacer"></div>
    <div v-for="(slide, index) in slides" :key="index">
      <PanelComponent>
        <template v-slot:header>
          <div class="toolbar-panel-controls center-middle">
            <div class="text-container-controls">Card {{index + 1}}</div>
            <div class="icon-container-controls right-controls" @click="deleteAt(index)">X
              <!-- <Icon icon="trash"></Icon> -->
            </div>
            <div class="icon-container-controls left-controls" @click="insertAt(index)">+
              <!-- <Icon icon="trash"></Icon> -->
            </div>
          </div>
        </template>
        <template v-slot:content>
          <SlideEditor :index="index" :data="slide"></SlideEditor>
        </template>
      </PanelComponent>

    </div>
    <div class="icon-container-controls left-controls" @click="insertAt('end')">+
      <!-- <Icon icon="trash"></Icon> -->
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
    Btn2
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
  width: 100%;
  height: 100%;
}
.toolbar-panel-controls{
  width: 100%;
  height: 2em;
  position: relative;
  font-weight: bold;
}
.icon-container-controls{
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background-color: aqua;
}
.right-controls{
  right: .5em;
}
.left-controls{
  left: .5em
}
.spacer{
  height: 5px
}
</style>