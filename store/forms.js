export const state = () => ({
  stage: '',
  mp3: false,
  wav: false,
  stems: false,
  images: false,
  valid: false
})

export const getters = {
  completeStage: state => {
    return state.stage
  },

}

export const mutations = {
  toggleStage(state,stage) {
    return state.stage = stage
  },
  toggleMp3 (state) {
    state.mp3 = !state.mp3
  },
  toggleWav (state) {
    state.wav = !state.wav
  },
  toggleStems (state) {
    state.stems = !state.stems
  },
  toggleImages (state) {
    state.images = !state.images
  },
  toggleValid (state) {
    state.valid = !state.valid
  },
}

