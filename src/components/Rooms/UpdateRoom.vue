<template>
  <RoomsHeader />
      <form class="add">
        <p>Digite o nome da sala</p>
        <input type="text" name="identification" placeholder="Exemplo: A1" v-model="Rooms.identification"/>
        
        <p>Selecione o tamanho da tela</p>
        <select v-model="screenSize">
        <option disabled value="">Selecione</option>
        <option>Pequena</option>
        <option>Média</option>
        <option>Grande</option>
      </select>
      <br><br><br>
        <button type="button" v-on:click="Updateroom" >Atualizar sala</button>
      </form>
</template>

<script>
import RoomsHeader from '../RoomsHeader.vue'
import axios from 'axios';
const axiosRequest = require('axios')

export default{
    name:'UpdateRoom',
    components:{
      RoomsHeader
      },
    data(){
      return{
          Rooms:{
                  identification:'',
                  screen:'',
              }, 
              screenSize:'' 
            }
    },
    methods:{
        async Updateroom()
        {
          axios.put(axios.baseURL+"Rooms/", {
          identification:this.Rooms.identification,
          screen:this.screenSize,
          id:this.Rooms.id, 

        }).then((response) => {
                  this.$router.push({ name: "EditRooms" });
                  console.log(response)
                })
                .catch(error => {
                  alert(error.response.data)
                })
        }
    },
    async mounted(){
      axiosRequest
        axios.get(axios.baseURL+"Rooms/"+this.$route.params.id)
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
