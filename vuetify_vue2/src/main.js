import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import DetailsView from './components/DetailsView'
import HomeView from './components/HomeView'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: HomeView, props : true },
  { path: '/movie/:id',name:"detailsView", component: DetailsView, props : true},
]
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
