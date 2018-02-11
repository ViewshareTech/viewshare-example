import Vue from 'vue'
import App from './App'
import viewshareui from 'viewshareui'
import 'viewshareui/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(viewshareui)

new Vue({
  el: '#app',
  render: h => h(App)
})
