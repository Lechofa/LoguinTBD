<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Bienvenido administrador</h1>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    Aqui van los div clases correspondientes a la data que se quiere enviar (las palabras que se quieren buscar en la bolsa de palabras creo)
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
    </div>
    <button class="btn btn-primary" @click="submit()">Access</button>-->
  </div>
</template>

<script>
//import auth from '../auth'

export default {


}
</script>