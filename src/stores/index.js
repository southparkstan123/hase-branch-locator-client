import Vue from 'vue'
import Vuex from 'vuex'
import branchLocation from './modules/branchLocation'
import siteConfig from './modules/siteConfig'
import message from './modules/message'
import serviceDetailsModal from './modules/serviceDetailsModal'
import ATMTypeModal from './modules/ATMTypeModal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message,
    serviceDetailsModal,
    branchLocation,
    siteConfig,
    ATMTypeModal
  }
})
