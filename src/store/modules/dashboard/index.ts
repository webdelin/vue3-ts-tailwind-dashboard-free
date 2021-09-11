
import { menuData } from "@/hooks/menus";
import { Commit } from 'vuex';
export default {
  namespaced: true,
  state() {
    return {
      categories: []
    }
  },
  mutations: {
    setCategories(state: any, payload: object) {
      state.categories.push(payload)
    }
  },
  actions: {
    async getCategories({ commit }: { commit: Commit }) {
      const {data} = await menuData()
      commit('setCategories', data.value)
    }
  },
  getters: {
    categories(state: any) {
      return state.categories
    }
  }
}