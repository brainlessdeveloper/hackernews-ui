import Vue from 'vue'
import revux from 'revux'

import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(revux)

const globals = {
  HN_PORTAL_BASE: 'https://news.ycombinator.com/',
  SHN_API_BASE: 'http://hn.algolia.com/api/v1/',
}

Object.keys(globals).forEach((key) => {
  Vue.prototype[`$${key}`] = globals[key]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
