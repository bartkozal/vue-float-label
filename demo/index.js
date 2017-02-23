import Vue from 'vue'
import VueFloatLabel from '../vue-float-label'
import Demo from './Demo'

Vue.use(VueFloatLabel)

new Vue({
  el: '#app',
  render: h => h(Demo)
})
