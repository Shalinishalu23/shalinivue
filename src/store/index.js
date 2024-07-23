import { createStore } from 'vuex'

export default createStore({
  state: {
    apiResponse: {},
    mindFood: {},
    topRestaurant: {}
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
    }
  },
  actions: {
    async getRequest({ commit, dispatch, state }){
      console.log('getRequest: ')
      try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        const json = await response.json()
        if (response) {
          commit('SET_MIND_FOOD', json.data.cards[0].card.card.imageGridCards.info)
          console.log('[1]', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
          commit('SET_TOP_RESTAURANT', json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
      } catch (error) {
        console.log('error: ', error)
      }
    }
  },
  modules: {
  }
})
