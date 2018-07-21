const mutations = {
  NAVIGATIONOPEN (state) {
    state.navigationopen = true
  },
  NAVIGATIONCLOSE (state) {
    state.navigationopen = false
  },
  NAVIGATIONTOGGLE (state) {
    state.navigationopen = !state.navigationopen
  },
  SETTITLE (state, title) {
    state.title = title
  }
}

export default mutations
