<template>
  <body>
    <RoomsHeader />
    <div class="cinema">
      <h2>Salas</h2>

    <table border="1">   
        <tr>
          <td>Nome</td>
          <td>Tela</td>
        </tr>                                            
          <tr v-for="item in Rooms" :key="item.id">                       
            <td>{{item.identification}}</td>
            <td>{{item.screen}}</td>
            <div class="nav">
              <td>
                <router-link :to="'/update-room/'+item.id">Atualizar</router-link>
                <button v-on:click="Deleteroom(item.id)">Deletar</button>
              </td>
            </div>
          </tr>
      </table>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import RoomsHeader from '../RoomsHeader.vue';
const axiosRequest = require('axios')

export default{
    name:'EditRooms',
    data(){
      return{
              Rooms:[]
            }
    },
    components:{
      RoomsHeader
},
    methods:{
                //função para deletar sala
                async Deleteroom(id){
                  let result =await axios.delete(axios.baseURL+"Rooms/"+id);
                  console.warn(result)
                  if(result.status==200){
                      this.loadData();
                }},     

              //função com uma promise para pegar as informações das salas da API
                loadData(){
                axiosRequest
                axios.get(axios.baseURL+"Rooms")
                .then((response) => {
                  this.Rooms = response.data;
                  console.log(response)
                })
                .catch(error => {
                  console.log(error)
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