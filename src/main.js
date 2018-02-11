import Vue from 'vue'
import App from './App'
import viewshare from 'viewshare'
import 'viewshare/dist/styles/viewshare.css'

Vue.config.productionTip = false
Vue.use(viewshare)

new Vue({
  el: '#app',
  render: h => h(App)
})
