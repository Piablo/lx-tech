<template>
  <div class="main-container-treeview">
    <div v-for="(item, index) in allCourses" :key="index" class="item-container-treeview" ref="itemContainerTreeview" @click="clickedAt(index)">{{item.label}}</div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
//Components
// import HelloWorld from '@/components/HelloWorld.vue'

//Services
//import { bus }from '@/services/Bus';

//colors
//Green = rgb(64, 201, 162);
//BlueGreen = rgb(42, 50, 75);
//Orange = rgb(241, 89, 70);

//Vuex

export default {
  props: [
    'name'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      allCourses: [],
      id: null,
    }
  },

  methods: {
    ...mapMutations(['onTreeviewClick']),
    styleComponent(){
      let listLength = this.allCourses.length;

      for(let i = 0; i < listLength; i++){
        this.$refs.itemContainerTreeview[i].style.paddingLeft = (this.allCourses[i].level * 15) + 'px';
        if(this.allCourses[i].activeIndex){
          this.$refs.itemContainerTreeview[i].style.color = '#40C9A2';
          this.$refs.itemContainerTreeview[i].style.fontWeight = 'bold';
          this.$refs.itemContainerTreeview[i].style.fontSize = '18px';
        }
      }
    },

    clickedAt(index){
      if(!this.allCourses[index].activeIndex){
        let payload = {
          name: this.name,
          selection: this.allCourses[index],
          index: index,
          // id = this.allCourses[index].id
        }
        this.onTreeviewClick(payload);
      }
      
    }
  },

  computed: mapGetters(['getTreeviewData']),

  created(){
    this.allCourses = this.getTreeviewData;
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  },
  mounted(){
    
    this.styleComponent();
  },
  watch: {
    getTreeviewData: function(treeviewData){
      this.allCourses = treeviewData;
    }
  },
  updated(){
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
.item-container-treeview:hover{
  transition: .3s;
  /* color: rgb(241, 89, 70); */
  /* color: #F7B32B; */
}
</style>