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
  },
  SETPAGEANIMATION (state, animation) {
    state.pageanimation = animation
  },
  SETDEVICEREADY (state) {
    state.deviceready = true
  },
  SETTABANIMATION (state, animation) {
    state.tabanimation = animation
  },
  SETTOOLBARHEIGHT (state, toolbarheight) {
    state.toolbarheight = toolbarheight
  },
  SETTOOLBAROPEN (state) {
    state.istoolbaropen = true
  },
  SETTOOLBARCLOSE (state) {
    state.istoolbaropen = false
  }
}

export default mutations
