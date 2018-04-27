let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

const state = {
  cities: [],
  city: defaultCity
}

export default state
