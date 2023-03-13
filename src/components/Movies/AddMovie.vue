<template>
  <AddMovieHeader />
      <form class="add">
        <p>Digite o título do filme</p>
        <input type="text" name="title" placeholder="exemplo: Avatar" v-model="Movies.title"/>
          
        <p>Digite o URL da imagem</p>
        <input type="text" name="imageUrl" placeholder="exemplo: https://veja.abril.com.br/wp-content/uploads/2022/12/O-Gato-de-Botas-2-19.jpg?quality=70&strip=info&w=680&h=453&crop=1" v-model="Movies.imageUrl"/>

        <p>Digite a duração do filme em minuto</p>
        <input type="text" name="lenght" placeholder="exemplo: 180" v-model="Movies.lenght"/>
       
        <p>Digite o gênero do filme</p>
        <input  type="text" name="genre" placeholder="exemplo: Ação" v-model="Movies.genre"/>
        
        <p>Selecione a classificação indicativa</p>
        <select v-model="AgeSelected">
        <option disabled value="">Selecione</option>
        <option>Livre</option>
        <option>10</option>
        <option>12</option>
        <option>14</option>
        <option>16</option>
        <option>18</option>
      </select>
      <br><br><br>
      <button type="button" v-on:click="AddMovie" >Adicionar filme</button>
      </form>
</template>

<script>
import axios from 'axios';
import AddMovieHeader from '../AddMovieHeader.vue';
export default{
    name:'AddMovie',
    components:{
      AddMovieHeader
},
    data(){
      return{
              Movies:{
                title:'',
                age:'',
                lenght:'',
                imageUrl:'',
                genre:'',
              },
              AgeSelected:''       
            }
    },
    methods:{
                  //função para adicionar na API as informações inseridas pelo usuario
                  async AddMovie(){               
                  axios.post(axios.baseURL+"Movies", {
                  title:this.Movies.title,
                  age:this.AgeSelected,
                  lenght:this.Movies.lenght,
                  imageUrl:this.Movies.imageUrl,
                  genre:this.Movies.genre,
                  }).then((response) => {
                  this.$router.push({ name: "EditMovies" });
                  console.log(response)
                  })
                  .catch(error => {
                  alert(error.response.data)
                  })
              }
    }
}
</script>
