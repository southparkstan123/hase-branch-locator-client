import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Multiselect from 'vue-multiselect'
import VueI18n from 'vue-i18n'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes, faInfoCircle, faLightbulb, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import App from './App.vue'
import store from './stores'
import router from './router'

import messageEN from './locales/en-US/messages'
import messageTC from './locales/zh-HK/messages'
import messageSC from './locales/zh-CN/messages'

library.add(faCheck, faTimes, faInfoCircle, faLightbulb, faPrint)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('multiselect', Multiselect)
Vue.use(VueI18n)

const messages = {
  'en-US': messageEN,
  'zh-HK': messageTC,
  'zh-CN': messageSC
}

export const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
})

new Vue({
  render: h => h(App),
  store,
  i18n,
  router
}).$mount('#app')
