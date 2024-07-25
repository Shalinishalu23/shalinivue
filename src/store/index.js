import { createStore } from 'vuex'

export default createStore({
  state: {
    apiResponse: {},
    mindFood: {},
    topRestaurant: {},
    cities: [],
    cuisines: [],
    searchedLocation:[],
    address:{}
  },
  getters: {
    GET_API_RESPONSE (state){
      return state.apiResponse 
    },
    GET_MIND_FOOD (state){
      return state.mindFood 
    },
    GET_TOP_RESTAURANT (state){
      return state.topRestaurant 
    },
    GET_CITIES (state){
      return state.cities 
    },
    GET_CUISINES (state){
      return state.cuisines
    },
    GET_SEARCH_LOCATION (state){
      return state.searchedLocation
    },
    GET_ADDRESS (state){
      return state.address
    }
  },
  mutations: {
    SET_API_RESPONSE (state, value){
      state.apiResponse = value
    },
    SET_MIND_FOOD (state, value){
      state.mindFood = value
    },
    SET_TOP_RESTAURANT (state, value){
      state.topRestaurant = value
    },
    SET_CITIES (state, value){
      state.cities = value
    },
    SET_CUISINES (state, value){
      state.cuisines = value
    },
    SET_SEARCH_LOCATION (state, value){
      state.searchedLocation = value
    },
    SET_ADDRESS(state, value){
      state.address = value
    }
  },
  actions: {
    async getRequest({ commit, dispatch, state }, value){
      try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5/?lat='+value.latitude+'&lng='+value.longitude)
        const json = await response.json()
        if (response) {
          commit('SET_MIND_FOOD', json.data.cards[0].card.card.imageGridCards.info)
          commit('SET_TOP_RESTAURANT', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
          // console.log('json.data.cards:2 ', json.data.cards[2]) // heading Restaurants with online food delivery in Bangalore
          // console.log('json.data.cards: 3', json.data.cards[3]) // sort
          // console.log('json.data.cards: 4', json.data.cards[4]) // rest card 
          // console.log('json.data.cards: 5', json.data.cards[5]) // show more btn 
          commit('SET_CITIES', json.data.cards[6].card.card.brands)
          commit('SET_CUISINES', json.data.cards[7].card.card.brands)
          // console.log('json.data.cards: 8', json.data.cards[8]) // Explore Every Restaurants Near Me
          // console.log('json.data.cards: 9', json.data.cards[9]) // play store
          // console.log('json.data.cards: 10',  json.data.cards[10].card.card.cities) // cities
          // console.log('json.data.cards: 11', json.data.cards[11]) // some desc
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async getLocation({ commit, dispatch, state }, value){
      console.log('value: ', value)
      try {
        const response = await fetch('https://www.swiggy.com/dapi/misc/place-autocomplete?input='+ value)
        if (response) {
          const json = await response.json()
          commit('SET_SEARCH_LOCATION', json.data)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
    async getAddress({ commit, dispatch, state }, value){
      try {
        const response = await fetch('https://www.swiggy.com/dapi/misc/address-recommend?place_id='+ value)
        if (response) {
          const json = await response.json()
          commit('SET_ADDRESS', json.data[0].geometry)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    },
  },
  modules: {
  }
})
