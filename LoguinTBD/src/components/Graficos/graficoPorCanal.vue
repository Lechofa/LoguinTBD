<template>
  <div class="center">
    <h2>{{title}}</h2>
    <p><button href="#/">TVN</button></p>
    <p><button href="#/">MEGA</button></p>
    <p><button href="#/">Canal 13</button></p>
    <p><button href="#/">Chilevisión</button></p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title:'Selecciona un canal',
      users:[]
    }
  },
  mounted:function(){
    console.log('Index.vue');

    // GET /someUrl
    this.$http.get('http://localhost:8090/TBDTaller1/actors')
    .then(response=>{
       // get body data
      this.users = response.body;
     console.log('users',this.users)
    }, response=>{
       // error callback
       console.log('error cargando lista');
    })
  }
}
</script>
