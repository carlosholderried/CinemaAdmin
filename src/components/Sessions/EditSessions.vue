<template>
  <body>
    <SessionsHeader />
    <div class="cinema">
      <h2>Sessões</h2>
    <table border="1">   
        <tr>
          <td>Filme</td>
          <td>Data</td>
          <td>Horário</td>
          <td>Dub/Leg</td>
          <td>3D</td>
          <td>Sala</td>
        </tr>                                            
          <tr v-for="item in Sessions" :key="item.id">                   
            <td>{{item.movie.title}}</td>
            <td>{{item.date}}</td>
            <td>{{item.hour}}</td>
            <td>{{item.dub}}</td>
            <td>{{item.d3}}</td>
            <td>{{item.room.identification}}</td>
            <div class="nav">
              <td>
                <router-link :to="'/update-session/'+item.id">Atualizar</router-link>
                <button v-on:click="Deletesession(item.id)">Deletar</button>
              </td>
            </div>
          </tr>
      </table>
    </div>
  </body>
</template>

<script>
import SessionsHeader from '../SessionsHeader.vue'
import axios from 'axios';
//const axiosRequest = require('axios')

export default{
    name:'EditSessions',
    data(){
      return{
              Sessions:[]
            }
    },
    components:{
      SessionsHeader
    },
    methods:{
                async Deletesession(id){
                  let result =await axios.delete(axios.baseURL+"Sessions/"+id);
                  // console.warn(result)
                  if(result.status==200){
                      this.loadData();
                }},

              loadData(){
                axios.get(axios.baseURL+"Sessions")
                .then((response) => {
                  this.Sessions=response.data;
                  // console.log(response)
                })
                .catch((error) => {     
                  console.log("test")           
                  console.log(error.response)
                  // console.log(error.response.data)
                  // alert(error.response.data);
                })
              }  

    },
    mounted()
    {        
        this.loadData();
    }
}
</script>

<style>
body {
  background-color: rgb(54, 54, 54);
}

.cinema{
  float: left;
  color: #d6d6d6f2;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
  overflow: hidden;
}
</style>