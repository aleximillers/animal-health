import Vue from 'vue'
import App from './App.vue'
import store from './store'

require('./assets/styles/style.css')

export const bus = new Vue();

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
