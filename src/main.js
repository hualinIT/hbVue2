// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Resource from 'vue-resource'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/common.css'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Resource)
/* eslint-disable no-new */
new Vue({
  el: '#apps',
  router,
  store,
  template: '<App/>',
  components: { App }
})
