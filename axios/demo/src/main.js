// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import elementUi from 'element-ui'
import 'mint-ui/lib/style.css'
import { Search } from 'mint-ui'
import { Button } from 'mint-ui'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import store from './plagins/store'

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component(Search.name, Search);
Vue.component(Button.name, Button);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(elementUi)
Vue.use(fontawesome)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
