// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
console.log("--------------------------------------------");
console.log(process.env.VUE_APP_ENABLE_MAINTENANCE);
Vue.use(VueSocketIO, process.env.API, store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
