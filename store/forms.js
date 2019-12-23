export const state = () => ({
  stage: ''
})

export const getters = {
  completeStage: state => {
    return state.stage
  }
}

export const mutations = {
  toggleStage(state,stage) {
    return state.stage = stage
  }
}
