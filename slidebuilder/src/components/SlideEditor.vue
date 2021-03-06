<template>
  <div>
    <ExpandablePanel title="Timing">
      <template v-slot:content>
        <InputComponent placeholder="Start Tick" :name="START_TICK" :parentIndex="index" :input="startTickData"></InputComponent>
        <InputComponent placeholder="End Tick" :name="END_TICK" :parentIndex="index" :input="endTickData"></InputComponent>
      </template>
    </ExpandablePanel>
    <div class="spacer"></div> 
    <SelectComponent :options="slideTypeOptions" placeholder="Select Slide Type" :name="SLIDE_TYPE" :previouslySelected="previouslySelected" :index="index"></SelectComponent>
    <div class="spacer"></div>

    <div class="select-file-button-container-slideEditor" v-if="showBrowseFiles">
      <label for="file-upload" class="custom-file-upload">Upload File</label>
      <input id="file-upload" type="file" ref="fileUpload" @change="fileSelected"/>
      <div class="filename-container-slideEditor">{{filename}}</div>
    </div>
    <div v-if="showImageProperties">
      <SelectInputCombo :data="yPositionSICombo"></SelectInputCombo>
      <div class="spacer"></div>
      <SelectInputCombo :data="xPositionSICombo"></SelectInputCombo>
      <div class="spacer"></div>
      <TwoInput>
        <template v-slot:left>
          <InputComponent placeholder="width" :index="index" :name="MEDIA_WIDTH"></InputComponent>
        </template>
        <template v-slot:right>
          <InputComponent placeholder="height" :index="index" :name="MEDIA_HEIGHT"></InputComponent>
        </template>
      </TwoInput>
    </div>
    <div v-if="showVideoProperties">showVideoProperties</div>
    <div v-if="showAudioProperties">showAudioProperties</div>
    
  </div>
</template>

<script>
//Components
import ExpandablePanel from '@/components/ExpandablePanel.vue';
import SelectComponent from '@/components/Select.vue';
import InputComponent from '@/components/Input.vue';
import registry from '../store/registry.js';
import Btn2 from '@/components/Btn2';
import SelectInputCombo from '@/components/SelectInputCombo';
import TwoInput from '@/components/TwoInput';

//Services
import { bus }from '@/services/Bus';

//Vuex
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: [
    'index',
    'data'
  ],
  components: {
    ExpandablePanel,
    InputComponent,
    SelectComponent,
    Btn2,
    SelectInputCombo,
    TwoInput
  },
  data(){
    return {
      START_TICK: registry.START_TICK,
      END_TICK: registry.END_TICK,
      SLIDE_TYPE: registry.SLIDE_TYPE,
      FILE_SELECTED: registry.FILE_SELECTED,
      MEDIA_WIDTH: registry.MEDIA_WIDTH,
      MEDIA_HEIGHT: registry.MEDIA_HEIGHT,

      previouslySelected: null,
      showBrowseFiles: false,
      filename: '',

      showImageProperties: false,
      showVideoProperties: false,
      showAudioProperties: false,

      startTickData: null,
      endTickData: null,
      slideTypeOptions: [
        {label: 'Video', id: 1},
        {label: 'Image', id: 2},
        {label: 'Audio', id: 3},
      ],

      yPositionSICombo: {
        index: this.index,
        selectPlaceholder: 'y-position',
        options: [
          {label: 'Top', id: 'top'},
          {label: 'Bottom', id: 'bottom'}
        ],
        selectName: registry.Y_POSITION,

        inputPlaceholder: '1-100%',
        inputName: registry.Y_POSITION_VALUE,
      },

      xPositionSICombo: {
        index: this.index,
        selectPlaceholder: 'x-position',
        options: [
          {label: 'Left', id: 'left'},
          {label: 'Right', id: 'right'}
        ],
        selectName: registry.X_POSITION,

        inputPlaceholder: '1-100%',
        inputName: registry.X_POSITION_VALUE,
      },
    }
  },

  methods: {
    ...mapMutations(['commitToStateDispatcher']),
    updateState(data){
      let controlName = data.controlName;
      let instruction = data.data;
      if(controlName === registry.SLIDE_TYPE){
        this.showBrowseFiles = true;
      }else if(controlName === registry.TYPE_IMAGE){
        this.showImageProperties = true;
      }else if(controlName === registry.TYPE_VIDEO){
        this.showVideoProperties = true;
      }else if(controlName === registry.TYPE_AUDIO){
        this.showAudioProperties = true;
      }
    },
    fileSelected(event){
      this.filename = event.target.files[0].name;
      let file = event.target.files[0];
      let payload = {
        controlName: this.FILE_SELECTED,
        index: this.index,
        file: file
      }
      this.commitToStateDispatcher(payload);
    }
  },

  computed: mapGetters(['allTodos', 'getSlides']),

  created(){
    this.startTickData = this.data.timing.startTick;
    this.endTickData = this.data.timing.endTick;
    this.previouslySelected = this.data.slideType;


    bus.$on("slideEditorStateChange-" + this.index, (data) => {
      this.updateState(data);
    })
  },

  watch: {
    getSlides: function(slides){
      //debugger
    }
  }
}
</script>

<style scoped>
.spacer{
  height: 5px;
}
.select-file-button-container-slideEditor{
  position: relative;
  width: 100%;
  height: 50px;
}
input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
}
.custom-file-upload {
  width: calc(100%);
  height: 24px;
  display: inline-block;
  background-color:#2E2E3A;
  border-radius: 10px;
  padding-top: 6px;
  color:rgb(64, 201, 162);
  font-weight: bold;
  cursor: pointer;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
    
}
.custom-file-upload:hover{
  transition: .3s;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
}
.filename-container-slideEditor{
  font-size: 10px;
  padding-top: 5px;
}
</style>