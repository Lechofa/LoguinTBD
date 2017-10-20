<template>
    PAGINA SECRETA
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
