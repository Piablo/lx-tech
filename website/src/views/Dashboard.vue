<template>
<div class="main-container-dashboard">
  <iframe :src="link" class="main-container-dashboard"></iframe>
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
    'props'
  ],
  components: {
    // HelloWorld
  },
  data(){
    return {
      link: null,
    }
  },

  methods: {
    //...mapActions(['fetchTodos'])
  },

  //computed: mapGetters(['allTodos']),

  created(){
    let userDetails = JSON.parse(window.localStorage.getItem('userDetails'));
    let userId = userDetails.id;
    this.link = 'http://localhost:8081?' + userId;
    // bus.$on("addFlashCardButtonComponent" + "onClick", (data) => {
    //   debugger;
    // })
  
  }
}
</script>

<style scoped>
.main-container-dashboard{
  width: 100%;
  height: 100vh;
  border: none;
}
</style>