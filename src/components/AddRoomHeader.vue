<template>
   <div class="nav">
            <router-link to="/edit-rooms">Voltar</router-link>
  </div>
</template>

<script>
export default{
        name:'AddRoomHeader',
        methods:{        
        }
}
</script>

<style>
.nav{
    background-color: #683f3f;
    overflow: hidden;
}
.nav a {
  float: left;
  color: #d6d6d6f2;
  padding: 14px 16px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  margin-right: 5px;
}
.nav a:hover{
    background: #ac6868;
    color:#ffffff
}
</style>