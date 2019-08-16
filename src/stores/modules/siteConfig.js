import _ from 'lodash'

const namespaced = true

const state = {
    currentLang: {label: "EN", value: "en-US"},
    langCanBeSelected: [
        {label: "繁", value: "zh-HK"},
        {label: "简", value: "zh-CN"}
    ]
}

const actions = {
    setLanguage ({ commit }, locale) {
        commit('setLanguage', (locale !== undefined) ? locale : "en-US");
    }
}

const mutations = {
    setLanguage (state, locale) {  
        const allLanguageList = _.concat(state.langCanBeSelected, state.currentLang);
        const newLanguageList = _.filter(allLanguageList, item => item.value !== locale);
        state.currentLang = _.head(_.filter(allLanguageList, item => item.value === locale));
        state.langCanBeSelected = newLanguageList;
    },
}

const getters = {
    getLanguagesToBeSelected(state){
        return state.langCanBeSelected
    },
    getCurrentLanguage(state){
        return state.currentLang
    }
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
