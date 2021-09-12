import { userData } from "@/hooks/users";
import { Commit } from 'vuex';
export default {
  namespaced: true,
  state() {
    return {
      users: []
    }
  },
  mutations: {
    setUsers(state: any, payload: object) {
      state.users.push(payload)
    }
  },
  actions: {
    async getUsers({ commit }: { commit: Commit }) {
      const {data} = await userData()
      console.log('data ', data)
      commit('setUsers', data.value)
    }
  },
  getters: {
    users(state: any) {
      return state.users
    }
  }
}