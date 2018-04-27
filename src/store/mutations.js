import * as types from './mutation-types'

const mutations = {
  [types.SET_CITIES] (state, cities) {
    state.cities = cities
  },
  [types.SET_CITY] (state, city) {
    state.city = city
  }
}

export default mutations