// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'
import plugins from './plugins'

sync(store, router)

Vue.use(plugins)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: (h) => h(App)
})
