import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'
import VueCesium from '../components/index.js'
import DocPreview from './components/DocPreview.vue'
import TextField from './components/TextField.vue'
import VueMaterial from 'vue-material'
import Prism from 'prismjs'
import 'element-ui/lib/theme-chalk/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'vue-material/dist/vue-material.css'
import './fonts/iconfont.css'
import { Select, Option, Slider, Switch } from 'element-ui'
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(Slider)
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueCesium)

Vue.material.registerTheme({
  white: {
    primary: 'white',
    accent: 'black'
  }
})

Vue.component('doc-preview', DocPreview)
Vue.component('text-field', TextField)

const router = new VueRouter({
  routes
})

router.afterEach(route => {
  Vue.nextTick(Prism.highlightAll)
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
