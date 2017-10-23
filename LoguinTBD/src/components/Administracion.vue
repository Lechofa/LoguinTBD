<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h2>{{title}}</h2>
      <p>
        <label for="firs">Nombre Programa</label>
        <input type="text" id="name" name="name" required v-model="show.name" onClick="this.select();" >
      </p>
      <p><button v-on:click="addShow()">Agregar Programa</button></p>
  </div>
</template>

<script>
//
  export default{
    data(){
      return{
        title:'Nuevo Programa',
        show:{name:''}
      }
    },

    methods:{
      addShow:function(){
        if (name.value == 0 ){
          alert("Tus campos no fueron llenados")
        }
        else{
              this.$http.post('http://localhost:8080/tvReactions/shows', this.show);
              alert("Programa Agregado")
                        }
        }
      }
    }
</script>