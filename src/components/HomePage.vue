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
axios.baseURL = 'http://192.168.0.6:7087/';

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

/* .cinema{
  float: left;
  color: #d6d6d6f2;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
  overflow: hidden;
} */
</style>