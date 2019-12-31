import Vue from 'vue'
import App from './App.vue'
import Welcome from './components/Welcome.vue'

import 'normalize.css'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdButton, MdContent, MdTabs, MdEmptyState, MdIcon, MdProgress } from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdEmptyState)
Vue.use(MdIcon)
Vue.use(MdProgress)

new Vue({
  el: '#app',
  render: h => h(App)
})
