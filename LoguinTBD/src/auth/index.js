import {router} from '../index'
import {someVar} from '../index'
import {ActualUser} from '../index'
//Aqui incluir las direcciones para realizar las conexiones a la API
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'



export default {

  user: {
    authenticated: false,
    admin: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {

      localStorage.setItem('id_token', data.id_token),
      this.user.authenticated = true,
      //En vez de mandar esto como true de 1, por medio de la APP pasarle el valor correspondiente a admin = True o que el usuario
      //Tiene permisos de admin
      this.user.admin = true,

      ActualUser.userOnly = true,
      ActualUser.admin = true

      if(redirect) {
        router.go(redirect)
      }

    }
    ).error((err) => {
      context.error = err
    })
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)        
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false      
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  },



  myFunction(){
      ActualUser.userOnly = true,
      //alert(someVar.total())
      alert(ActualUser.userOnly)
    }
  }
