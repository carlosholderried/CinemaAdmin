<template>
  <body>
    <MoviesHeader />
    <div class="cinema">
      <h2>Filmes</h2>
    <table border="1">   
        <tr>
          <td></td>
          <td>Título</td>
          <td>Classificação</td>
          <td>Duração</td>
          <td>Gênero</td>
        </tr>                                                        
          <tr v-for="item in Movies" :key="item.id">
            <td><img class="image"
                :src="item.imageUrl"
                alt="">
            </td>                        
            <td>{{item.title}}</td>                           
            <td>{{item.age}}</td>                             
            <td>{{item.lenght}}min</td>                         
            <td>{{item.genre}}</td>                                   
            <div class="nav">                                         
              <td>                                                                  
                <router-link :to="'/update-movie/'+item.id">Atualizar</router-link>
                <button v-on:click="deleteMovie(item.id)">Deletar</button>
              </td>                               
            </div>
          </tr>
      </table>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import MoviesHeader from '../MoviesHeader.vue';
const axiosRequest = require('axios')

export default{
    name:'EditMovies',
    data(){
      return{
              Movies:[]
            }
    },
    components:{
      MoviesHeader
},
    methods:{
                async deleteMovie(id){
                  let result =await axios.delete(axios.baseURL+"Movies/"+id);
                  console.warn(result)
                  if(result.status==200){
                      this.loadData();
                }},

                loadData(){
                axiosRequest
                axios.get(axios.baseURL+"Movies")
                .then((response) => {
                  this.Movies = response.data;
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

.image{
  width: 200px;
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