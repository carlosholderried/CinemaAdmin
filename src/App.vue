<template>
 <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d6d6d6f2;
}

body{
   padding:0;
   margin:0;
 }

.logo{
  width: 100px;
}

.register input, .login input, .add input {
   width: 300px;
   height: 40px;
   padding-left: 20px;
   display: block;
   margin-top: 1px;
   margin-bottom: 35px;
   margin-right: auto;
   margin-left: auto;
   border: 3px solid #683f3f;
   font-size: 18px;
 }
 .register button, .login button, .add button {
   width: 170px;
   height: 40px;
   border: 3px solid #999999;
   background: #683f3f;
   color: #fff;
   cursor: pointer;
 }


</style>