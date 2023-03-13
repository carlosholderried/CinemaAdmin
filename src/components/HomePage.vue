<template>
  <body>
      <HomeHeader />
      <h1>Bem vindo ao sistema de cadastro</h1>
      <img src="https://media.tenor.com/bCfpwMjfAi0AAAAC/cat-typing.gif" alt="">
      
  </body>
</template>

<script>
import HomeHeader from './HomeHeader.vue';
import axios from 'axios';
axios.baseURL = 'http://192.168.0.6:7087/';  // atribui o ip da api ao baseURL

export default{
    name:'HomePage',
    data(){
      return{
            }
    },
    components:{
      HomeHeader
},
    methods:{
                              
    },
    mounted()
    {        
        
    }
}
</script>

<style>
body {
  background-color: rgb(54, 54, 54);
}

</style>