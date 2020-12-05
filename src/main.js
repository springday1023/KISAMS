import Vue from 'vue'
import App from './App'
import router from './router'

// Default CSS
import './assets/css/default.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
