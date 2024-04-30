const namespaced = true

const state = {
  show: false
}

const getters = {
  isShowModal: state => state.show
}

const actions = {
  open ({ commit }) {
    commit('open')
  },
  close ({ commit }) {
    commit('close')
  }
}

const mutations = {
  open (state) {
    state.show = true
  },
  close (state) {
    state.show = false
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
