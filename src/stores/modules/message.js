const state = {
  type: '',
  message: '',
  show: false
}
  
const namespaced = true
  
const getters = {
  getMessageObj: state => state
}

const actions = {
  setMessage ({ commit }, payload) {
    commit('setMessage', payload)
  },
  closeMessage ({ commit }) {
    commit('closeMessage')
  }
}

const mutations = {
  setMessage (state, obj) {
    state.type = obj.type
    state.message = obj.message
    state.show = true
  },
  closeMessage () {
    state.type = ''
    state.message = ''
    state.show = false
  }
}
  
export default {
  state,
  namespaced,
  getters,
  actions,
  mutations
}