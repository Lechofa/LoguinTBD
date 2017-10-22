<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <p>Log in to your account to get some great quotes.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
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
    <button class="btn btn-primary" @click="submit()">Access</button>
  </div>
</template>

<script>
import auth from '../auth'

export default {

  data() {
    return {
      credentials: {
        username: '',
        password: ''
        //esAdmin: ''
      },
      error: ''
    }
  },

  methods: {

    submit() {
      //Toma los valores dentro de los comboBox en la pagina para realizar la consulta si el usuario es valido
      //(Esto se vee en el archivo index.js en la carpeta auth)
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password,
        //esAdmin: false
      }
      //Funcionen el archivo index.js
      auth.login(this, credentials, 'graficos')
      //this.MyUser.userOnly = true,
      //this.MyUser.admin = true 
    }
  }
  
}
</script>