import _ from 'lodash'
const namespaced = true

const state = {
  showServiceDetailsModal: false,
  siteName: '',
  siteAddress: '',
  siteAMBServiceHour: '',
  siteServiceHourRemark: '',
  siteServiceHourWeekdays: '',
  siteServiceHourSat: '',
  siteServiceHourSun: '',
  siteFXATMServices: '',
  siteLocation: [0, 0]
}

const getters = {
  getModalObj: state => state,
  isSiteServiceHourRemarkEmpty: state => _.isEmpty(state.siteServiceHourRemark),
  isFxAtmServicesEmpty: state => _.isEmpty(state.siteFXATMServices),
  isServiceHourWeekdaysEmpty: state =>  _.isEmpty(state.siteServiceHourWeekdays),
  isServiceHourSatEmpty: state => _.isEmpty(state.siteServiceHourSat),
  isServiceHourSunEmpty: state => _.isEmpty(state.siteServiceHourSun),
  isSiteAMBServiceHourEmpty: state => _.isEmpty(state.siteAMBServiceHour)
}

const actions = {
  open ({ commit }, payload) {
    commit('openServiceDetailsModal', payload)
  },
  close ({ commit }) {
    commit('closeServiceDetailsModal')
    setTimeout(() => {
      commit('clearItem')
    }, 1000)
  }
}

const mutations = {
  openServiceDetailsModal (state, payload) {
    state.showServiceDetailsModal = true
    state.siteAddress = payload.siteAddress
    state.siteName = payload.siteName
    state.siteAMBServiceHour = payload.siteAMBServiceHour
    state.siteServiceHourRemark = payload.siteServiceHourRemark
    state.siteServiceHourWeekdays = payload.siteServiceHourWeekdays
    state.siteServiceHourSat = payload.siteServiceHourSat
    state.siteServiceHourSun = payload.siteServiceHourSun
    state.siteFXATMServices = payload.siteFXATMServices
    state.siteLocation = payload.siteLocation
  },
  closeServiceDetailsModal (state) {
    state.showServiceDetailsModal = false
  },
  clearItem (state) {
    state.siteAddress = ''
    state.siteName = ''
    state.siteAMBServiceHour = ''
    state.siteServiceHourRemark = ''
    state.siteServiceHourWeekdays = ''
    state.siteServiceHourSat = ''
    state.siteServiceHourSun = ''
    state.siteFXATMServices = ''
    state.siteLocation =[0, 0]
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
