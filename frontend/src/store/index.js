import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      logos: []
    };
  },
  mutations: {
    setLogos(state, logos) {
      state.logos = logos;
    },
    addLogo(state, logo) {
      state.logos.push(logo);
    },
    removeLogo(state, id) {
      state.logos = state.logos.filter(logo => logo.id !== id);
    }
  },
  actions: {
    async fetchLogos({ commit }) {
      try {
        const response = await axios.get('https://66e7327417055714e58bb31d.mockapi.io/logos');
        commit('setLogos', response.data);
      } catch (error) {
        console.error('Failed to fetch logos:', error);
      }
    },
    async addLogo({ commit }, logo) {
      try {
        const response = await axios.post('https://66e7327417055714e58bb31d.mockapi.io/logos', logo);
        commit('addLogo', response.data);
      } catch (error) {
        console.error('Failed to add logo:', error);
      }
    },
    async deleteLogo({ commit }, id) {
      try {
        await axios.delete(`https://66e7327417055714e58bb31d.mockapi.io/logos/${id}`);
        commit('removeLogo', id);
      } catch (error) {
        console.error('Failed to delete logo:', error);
      }
    }
  }
});

export default store;
