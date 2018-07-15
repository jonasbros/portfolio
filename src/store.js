import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    works: [],
  },
  mutations: {
    setWork(state, works) {
      state.works = works;
    }
  },
  actions: {
    getWorks(context) {
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3432270165.9d39885.a02424bcdaee4b02a866d8afa82febfb')
        .then((response) => {
          context.commit('setWork', response.data.data);
        })
        .catch((response) => {
          console.log(response);
        });
    }
  },
  getters: {
    getWorks(state) {
      return state.works;
    }
  }
})
