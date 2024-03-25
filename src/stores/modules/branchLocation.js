import BranchLocationServices from '../../services/BranchLocationServices';
import { outputMessageForResult, displayAvailableCurrencies } from "../../helpers/MessageHelper"

const state = {
  locationItems: [],
  isLoading: false,
  message: ''
}

const namespaced = true

const actions = {
  async getBranchesOrATMLocationByDistrict({ commit }, payload){
    commit('locationItemsLoading');
    try {
      const response = await BranchLocationServices.getBranchOrATMLocations({ response_value: payload });
      //Commit the data of response to Branch Location mutation
      commit('resetLocationItems')
      setTimeout(() => {
        commit('setLocationItems', { items: response.data, lang: payload.lang});

        commit('setMessage', outputMessageForResult({
          districts: response.districts,
          supportedCurrencies: response.supportedCurrencies,
          nonSupportedCurrencies: response.nonSupportedCurrencies,
          messageType: response.messageType
        }));
        commit('locationItemsLoaded');
      },1000)
            
    } catch (error) {
      commit('message/setMessage', error, {root: true});
    }
  },
  resetItems({ commit }) {
    commit('resetLocationItems')
  }
}

const mutations = {
  setLocationItems(state, payload){
    let result = [];
    const locale = payload.lang
    payload.items.forEach((item) => {
      result.push({
        "siteName": item["SiteName" + locale],
        "siteAddress": item["SiteAddress" + locale],
        "siteServiceHourRemark": item["ServiceHourRemark" + locale],
        "siteAMBServiceHour": item['AMBServiceHour' + locale],
        "siteServiceHourWeekdays": item["ServiceHourWeekdays"],
        "siteServiceHourSat": item["ServiceHourSat"],
        "siteServiceHourSun": item["ServiceHourSun"],
        "siteFXATMServices" : (item["AvailableCurrencies"] !== null) ? displayAvailableCurrencies(item["AvailableCurrencies"]) : null,
        "lat": item['Lat'],
        "lng": item['Lng'],
      })
    });
    state.locationItems = result
  },
  resetLocationItems(state){
    state.locationItems = []
  },
  locationItemsLoading(state){
    state.isLoading = true
  },
  locationItemsLoaded(state){
    state.isLoading = false
  },
  setMessage(state, payload){
    state.message = payload
  }
}

const getters = {
  getLocationItems(state) {
    return state.locationItems
  },
  getLoadingState(state){
    return state.isLoading
  },
  getMessage(state){
    return state.message
  }
}

export default {
  state,
  namespaced,
  getters,
  actions,
  mutations
}
  