import Vue from 'vue'
import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Interface from './components/Interface.vue'

import 'normalize.css'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import {
    MdButton, MdContent, MdDrawer, MdTabs, MdToolbar,
    MdList, MdEmptyState, MdIcon, MdProgress
} from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdDrawer)
Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdEmptyState)
Vue.use(MdIcon)
Vue.use(MdProgress)

new Vue({
  el: '#app',
  render: h => h(App)
})
