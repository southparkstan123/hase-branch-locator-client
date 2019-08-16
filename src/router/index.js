import Vue from 'vue'
import { i18n } from '../main'
import store from '../stores'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
    let language = to.query.lang;
    if (!language) {
        language = 'en-US';
    }
    i18n.locale = language
    i18n.t
    store.dispatch('siteConfig/setLanguage', language)
    next();
})

export default router