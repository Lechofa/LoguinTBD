<template>
  <nav class="navbar navbar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'">Home</a></li>
        <li v-if="!user.authenticated"><a v-link="'login'">Login</a></li>
        <!--<li v-if="user.authenticated"><a v-link="'secretquote'">TVReactions</a></li>-->
        <li v-if="user.authenticated"><a v-link="'graficos'">Graficos</a></li>
        <li v-if="user.authenticated"><a v-link="'administracion'">Administración</a></li>
        <li v-if="user.authenticated"><a v-link="'login'" @click="logout()">Logout</a></li>
      </ul>
    </div>    
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
<!-- -->
</template>

<script>
import auth from '../auth'

export default {
  
  data() {
    return {
      user: auth.user
    }
  },

  methods: {
    //Unicamente sirve para desloguearse de la pagina y cambiar como el tipo de seguridad a no autorizado
    logout() {
      auth.logout()
    }
  }
}
</script>
