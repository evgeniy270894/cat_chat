// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from './service/firebase'
import Vuefire from 'vuefire'

Vue.use(Vuefire)

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3F51B5',
    secondary: '#009688',
    accent: '#FF6F00',
  },
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // firebase: {
  //   chat: firebase.database.ref('chat').orderByChild('created_at')
  // },
  template: '<App/>',
  components: { App }
})
