<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Graficos TVReactions</h1>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    Todos los graficos que necesita al alcanze de 1 click
    <h1>Unir con la parte del Nico</h1>

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




import auth from '../auth'

export default {
  data() {
    //message: 'Probando hola mundo'
  },

  methods: {
    route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
  }

}
</script>