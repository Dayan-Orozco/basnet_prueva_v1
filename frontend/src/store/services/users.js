import axios from 'axios'

const state = {
  users: [],
  emailFail: false,
  tokenFail: false
}

const getters = {}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  setUser (state, user) {
    state.user = user
  },
  setEmailFail (state, bool) {
    state.emailFail = bool
  },
  setTokenFail (state, bool) {
    state.tokenFail = bool
  }
}

const actions = {
  
}

export default {
  state,
  getters,
  mutations,
  actions
}
