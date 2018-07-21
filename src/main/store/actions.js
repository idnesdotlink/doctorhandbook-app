const actions = {
  setnavigationopen ({commit}) {
    commit('NAVIGATIONOPEN')
  },
  setnavigationclose ({commit}) {
    commit('NAVIGATIONCLOSE')
  },
  togglenavigation ({commit}) {
    commit('NAVIGATIONTOGGLE')
  },
  settitle ({commit}) {
    commit('SETTITLE')
  }
}
export default actions
