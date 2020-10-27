<template>
<div class="main-container-select">
  <input class="input-inputComponent" :placeholder="placeholder" v-model="userInput" readonly>
  <div class="dropdown-btn-select center-middle" @click="toggleOptionsMenu">V</div>
  <div class="options-menu-select" v-if="showOptions">
    <div class="inner-options-menu-select">
      <div v-for="(option, index) in options" :key="index">
        <div class="option-container-select center-middle" @click="selectedIndex(index)">
          <div class="text-container-select">{{option.label}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="error-input">{{errorMessage}}</div>
</div>
</template>

<script>
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
import { bus }from '@/services/Bus';

//Vuex
import { mapMutations } from 'vuex';

//colors
//Green = rgb(64, 201, 162)
//BlueGreen = rgb(42, 50, 75)
//Orange = rgb(241, 89, 70) FFC15E

export default {
  props: [
    'placeholder',
    'options',
    'name',
    'index',
    'previouslySelected'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      showOptions: false,
      errorMessage: null,
      userInput: null,
      globalClickBlocked: false,
    }
  },

  methods: {
    ...mapMutations(['commitToStateDispatcher']),
    toggleOptionsMenu(){
      this.showOptions = !this.showOptions;
      this.globalClickBlocked = true;
    },
    selectedIndex(index){
      this.userInput = this.options[index].label;
      this.showOptions = false;

      let payload = {
        controlName: this.name,
        userInput: this.options[index],
        index: this.index
      }
      this.commitToStateDispatcher(payload);
    }
  },

  //computed: mapGetters(['allTodos']),

  created(){
    this.userInput = this.previouslySelected;
    bus.$on("globalClick", (data) => {
      if(this.globalClickBlocked){
        this.globalClickBlocked = false;
      }else{
        this.showOptions = false;
      };
    })
  }
}
</script>

<style scoped>
.main-container-select{
  width: 100%;
  height: 48px;
  position: relative;
}
.input-inputComponent{
  position: absolute;
  left:0;
  top:0;
  width: calc(100% - 12px - 35px);
  height: 28px;
  border-radius: 10px 0 0 10px;
  border-style: none;
  padding-left: 10px;
  outline-color: transparent;
  background-color:rgb(64, 201, 162);
  outline-style: none;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
  margin-bottom: 5px;
  font-family: 'Roboto';
  
  /* cursor: pointer; */
}
.error-input{
  font-size: 13px;
  height: 13px;
  text-align: left;
  padding-left: 5px;
  color: rgb(241, 89, 70);
}
.spacer{
  height: 5px;
}
.dropdown-btn-select{
  position: absolute;
  top:0;
  right:0;
  width: 35px;
  height: 30px;
  background-color:#2E2E3A;
  border-radius: 0 10px 10px 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  cursor: pointer;
  color:rgb(64, 201, 162);
}
.dropdown-btn-select:hover{
  transition: .3s;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 1);
  color:rgb(45, 140, 113);
}
.options-menu-select{
  position: absolute;
  top:30px;
  left: 10px;
  width: calc(100% - 45px);
  background-color:#2E2E3A;
  border-radius: 0 0 10px 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  padding-bottom: 10px;
  padding-top: 10px;
  z-index: 100;
}
.inner-options-menu-select{
  margin-left:10px;
  width: calc(100% - 20px);
  z-index: 101;
}
.option-container-select{
  width:100%;
  height: 30px;
  animation-duration: .5s;
  animation-name: expandHeight;
  border-radius: 10px;
  color:rgb(64, 201, 162);
  cursor: pointer;
}
.option-container-select:hover{
  transition: .3s;
  background-color: rgb(71,71,89);
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 1);
}
.text-container-select{
  animation-duration: 1s;
  animation-name: fadin;
}

@keyframes expandHeight {
  from {
    height: 0;
  }

  to {
    height: 30px;
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