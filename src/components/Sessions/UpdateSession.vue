<template>
  <SessionsHeader />
      <form class="add">
        <p>Digite a data da sessão</p>
    <input type="text" name="date" placeholder="Exemplo: 9/3(dia/mês)" v-model="Sessions.date" />
    <p>Digite o horário da sessão</p>
    <input type="text" name="hour" placeholder="Exemplo: 15:00" v-model="Sessions.hour" />

    <p>Selecione dublado ou legendado</p>
        <select v-model="dubSelected">
        <option disabled value="">Selecione</option>
        <option>dublado</option>
        <option>legendado</option>
      </select>
  
      <p>Selecione sessão 3d ou sessão normal</p>
        <select v-model="d3Selected">
        <option disabled value="">Selecione</option>
        <option>sessão 3D</option>
        <option>sessão normal</option>
      </select>

    <p>Selecione o filme</p>
      <select v-model="movieId">
          <option disabled value="">Selecione</option>
          <option v-for="(movie, index) in Movies" :value="movie.id" :key="index">
            {{ movie.title }}
          </option>
      </select>

    <p>Selecione a sala</p>
      <select v-model="roomId">
          <option disabled value="">Selecione</option>
          <option v-for="(room, index) in Rooms" :value="room.id" :key="index">
            {{ room.identification }}
          </option>
      </select>

    <br><br><br>
        <button type="button" v-on:click="UpdateSession" >Atualizar Sessão</button>
      </form>
</template>

<script>
import SessionsHeader from '../SessionsHeader.vue'
import axios from 'axios';
const axiosRequest = require('axios')
export default{
    name:'UpdateSession',
    components:{
      SessionsHeader
      },
    data(){
      return{
          Sessions:{
                  date:'',
                  hour:'',
                  dub:'',
                  d3:'',
                  movieId:'',
                  roomId:'' 
              },
                  Movies: [],
                  movieId: '',
                  Rooms: [],
                  roomId: '',
                  dubSelected:'',
                  d3Selected:''
            }
    },
    methods:{
        // função para atualizar a sessão
        async UpdateSession()
        {
          axios.put(axios.baseURL + "Sessions/", {
          date: this.Sessions.date,
          hour: this.Sessions.hour,
          dub: this.dubSelected,
          d3: this.d3Selected,
          movieId: this.movieId,
          roomId: this.roomId,
          id:this.Sessions.id,

        }).then((response) => {
                  this.$router.push({ name: "EditSessions" });
                  console.log(response)
                })
                .catch(error => {
                  alert(error.response.data)
                })
        }
    }, 
      mounted(){
        //Promise para receber as informações das sessões cadastrados
        axiosRequest
        axios.get(axios.baseURL+"Sessions/"+this.$route.params.id)
        .then((response) => {
          this.Sessions = response.data;
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

        //Promise para receber as informações dos filmes cadastrados
        axios.get(axios.baseURL + "Movies")
      .then((response) => {
        this.Movies = response.data;
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

      //Promise para receber as informações das salas cadastrados
    axios.get(axios.baseURL + "Rooms")
      .then((response) => {
        this.Rooms = response.data;
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    }
}
</script>
