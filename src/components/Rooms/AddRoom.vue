<template>
  <AddRoomHeader />
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
        <button type="button" v-on:click="AddRoom" >Adicionar sala</button>
      </form>
</template>

<script>
import axios from 'axios';
import AddRoomHeader from '../AddRoomHeader.vue';
export default{
    name:'AddRoom',
    components:{
      AddRoomHeader
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
                  //função para adicionar na API as informações inseridas pelo usuario
                  async AddRoom(){             
                    axios.post(axios.baseURL+"Rooms", {
                    identification:this.Rooms.identification,
                    screen:this.screenSize,
                    }).then((response) => {
                    this.$router.push({ name: "EditRooms" });
                    console.log(response)
                    })
                    .catch(error => {
                    alert(error.response.data)
                    })

              }
    }
}
</script>
