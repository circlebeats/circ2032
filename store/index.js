export const state = () => ({
  beats: [],
  filBeats: []
})


export const getters = {
  allBeats: (state) => state.beats,
  getTodoById: (state) => (tags) => {
    return state.filBeats.filter(beat => beat.tags === tags)
  },
}


export const mutations = {
  setBeats: (state,beats) => (state.beats = beats),
  setFilBeats: (state,filBeats) => (state.filBeats = filBeats),
  SET_LIST_SEARCH: (state, tags) => {
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('fetchAllBeats')
  },
  async fetchAllBeats({ commit }) {
    const beats = await this.$axios.$get('http://127.0.0.1:3001/beatsFull')
    commit('setBeats', beats)
    const filBeats = await this.$axios.$get('http://35.203.87.148:80/beatsFull')
    commit('setFilBeats', filBeats)
  },

}
