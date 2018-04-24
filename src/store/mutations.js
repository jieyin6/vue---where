import * as types from './mutation-types'

const mutations = {
  [types.SET_CITIES] (state, cities) {
    state.cities = cities
  }
}

export default mutations