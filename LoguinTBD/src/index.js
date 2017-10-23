import Vue from 'vue'

import Home from './components/Home.vue'
import Administracion from './components/Administracion.vue'
import Graficos from './components/Graficos.vue'
import Login from './components/Login.vue'

/*
import GraficoPorCanal from './Graficos/components/graficoPorCanal.vue'
import GraficoNoticias from './Graficos/components/graficoNoticias.vue'
import GraficoTeleseries from './Graficos/components/graficoTeleseries.vue'
import GraficoMatinales from './Graficos/components/graficoMatinales.vue'*/


import GraficoPorCanal from './components/graficoPorCanal.vue'
import GraficoNoticias from './components/graficoNoticias.vue'
import GraficoTeleseries from './components/graficoTeleseries.vue'
import GraficoMatinales from './components/graficoMatinales.vue'

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './components/App.vue';


Vue.use(VueResource);
Vue.use(VueRouter)

//require("./style.scss")

import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// Check the user's auth status when the app starts

//auth.checkAuth()

export var ActualUser = {
  userOnly: true,
  admin: true
};


export var router = new VueRouter()


router.beforeEach(function (transition) {
  if(transition.to.adminOnly &&  !ActualUser.admin) {
    transition.redirect('/home'); 
  } else {  
    transition.next();
  }
});

router.beforeEach(function (transition) {
  if(transition.to.userOnly &&  !ActualUser.userOnly) {
    transition.redirect('/home');
  } else {  
    transition.next();
  }
});


router.map({
  '/home': {
    component: Home
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
  '/graficoPorCanal':{
    component: GraficoPorCanal,
    userOnly: true
  },
  '/graficoNoticias':{
    component: GraficoNoticias,
    userOnly: true
  },
  '/graficoTeleseries':{
    component: GraficoTeleseries
  },
  '/graficoMatinales':{
    component: GraficoMatinales
  }
})


router.redirect({
  '*': '/home'
})



router.start(App, '#app')