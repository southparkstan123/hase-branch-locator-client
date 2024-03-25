const namespaced = true

const state = {
  show: false,
  items: []
}

const getters = {
  isShowATMTypeModal: state => state.show,
  getList: state => state.items
}

const actions = {
  open ({ commit }, payload) {
    commit('open', payload)
  },
  close ({ commit }) {
    commit('close')
    setTimeout(() => {
      commit('clearItem')
    },1000)
  }
}

const mutations = {
  open (state, payload ) {
    state.show = true
    state.items = payload
  },
  close (state) {
    state.show = false
  },
  clearItem (state) {
    state.items = []
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
