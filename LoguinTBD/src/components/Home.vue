<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Bienvenido a TVReactions</h1>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>  
    </div>
    fotitos kawaii
    Info acerca de tv Reaction

    <div class="Prueba-area">
        <h2><blockquote>{{ message }}</blockquote></h2>      
    </div>

    <button class="btn btn-primary" @click="prueba()">Try it</button>

    <!--<div class="form-group">
      <input 
        type="text" 
        class="form-control"
        placeholder="Enter your username"
        v-model="credentials.username"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control"
        placeholder="Enter your password"
        v-model="credentials.password"
      >
    </div>-->
  </div>
</template>

<script>

import auth from '../auth'


export default {

  data() {

    return {
      message: 'Probando q el mensaje se puso bien',
      error: ''
    }
    return {

    }
  },



  methods: {
    prueba(){
      auth.myFunction()
    }
  } 

}
</script>