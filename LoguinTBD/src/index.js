import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import SecretQuote from './components/SecretQuote.vue'
import Administracion from './components/Administracion.vue'
import Graficos from './components/Graficos.vue'
import Admin from './components/Admin.vue'

//import Signup from './components/Signup.vue'

import Login from './components/Login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts
auth.checkAuth()


// Sample means of checking user access
var MyUser = { userOnly: false,
  admin: false }; 

export var router = new VueRouter()


router.beforeEach(function (transition) {
  if(transition.to.adminOnly &&  !MyUser.admin) {
    transition.redirect('/home');
  } else {  
    transition.next();
  }
});

router.beforeEach(function (transition) {
  if(transition.to.userOnly &&  !MyUser.userOnly) {
    transition.redirect('/home');
  } else {  
    transition.next();
  }
});


router.map({
  '/home': {
    component: Home
  },
  '/secretquote': {
    component: SecretQuote
  },  
  '/login': {
    component: Login
  },
  '/administracion': {
    component: Administracion,
    adminOnly: true
  },
  '/graficos':{
    component: Graficos,
    userOnly: true,
    adminOnly: true
  },
  '/secret-admin-panels': {
    component: Admin
    //admin: true
  }
})


router.redirect({
  '*': '/home'
})



router.start(App, '#app')

