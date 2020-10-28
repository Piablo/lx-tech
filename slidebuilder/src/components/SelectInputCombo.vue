<template>
<div class="main-container-selectInputCombo">
  <div class="half-width-selectInputCombo half-width-left">
    <SelectComponent :placeholder="selectPlaceholder" :options="options" :name="selectName" :index="index"></SelectComponent>
  </div>
  <div class="half-width-selectInputCombo half-width-right">
    <InputComponent :placeholder="inputPlaceholder" :name="inputName" :index="index"></InputComponent>
  </div>
</div>
</template>

<script>
//Components
import SelectComponent from '@/components/Select.vue';
import InputComponent from '@/components/Input.vue';

//Services
//import { bus }from '@/services/Bus';
import registry from '../store/registry';

//Vuex
//import { mapGetters, mapActions } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70)

export default {
  props: [
    'data'
  ],
  components: {
    SelectComponent,
    InputComponent
  },
  data(){
    return {
      index: null,
      selectPlaceholder: null,
      options: null,
      selectName: null,

      inputPlaceholder: null,
      inputName: null,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    this.index = this.data.index;
    this.selectPlaceholder = this.data.selectPlaceholder;
    this.options = this.data.options;
    this.selectName = this.data.selectName;

    this.inputPlaceholder = this.data.inputPlaceholder;
    this.inputName = this.data.inputName;
  }
}
</script>

<style scoped>
.main-container-selectInputCombo{
  width: 100%;
  height: 30px;
  position: relative;
}
.half-width-selectInputCombo{
  position: absolute;
  top: 0;
  width: calc(50% - 5px);
  height: 30px;
}
.half-width-left{
  left: 0
}
.half-width-right{
  right: 0
}
</style>