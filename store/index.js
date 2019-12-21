export const state = () => ({
  beats: []
})


export const getters = {
  allBeats: (state) => state.beats
}


export const mutations = {
  setBeats: (state,beats) => (state.beats = beats),
  SET_LIST_SEARCH: (state, tags) => {

  }
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('fetchAllBeats')
  // },
  async fetchAllBeats({ commit }) {
    const beats = await this.$axios.$get('http://35.188.61.24:80/beatsFull')
    commit('setBeats', beats)
  }
}
