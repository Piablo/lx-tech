<template>
<div class="main-container-treeview">
  <div v-for="(item, index) in data" :key="index" class="item-container-treeview" ref="itemContainerTreeview" @click="clickedAt(index)">{{item.label}}</div>
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
    'data'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
    styleComponent(){
      let listLength = this.data.length;

      for(let i = 0; i < listLength; i++){
        this.$refs.itemContainerTreeview[i].style.paddingLeft = (this.data[i].level * 15) + 'px';
        if(this.data[i].activeIndex){
          this.$refs.itemContainerTreeview[i].style.color = '#40C9A2';
          this.$refs.itemContainerTreeview[i].style.fontWeight = 'bold';
          this.$refs.itemContainerTreeview[i].style.fontSize = '18px';
        }
      }
    },

    clickedAt(index){
      console.log(this.data[index]);
    }
  },

  //computed: mapGetters(['allTodos']),

  created(){
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  mounted(){
    this.styleComponent();
  }
}
</script>

<style scoped>
.main-container-treeview{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(255,255,255, .7);
}
.item-container-treeview{
  height: 1.5em;
  text-align: left;
  cursor: pointer;
}
</style>