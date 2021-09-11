import { createStore, createLogger } from "vuex"
import dashboard from "./modules/dashboard"
const plugins = []
if (process.env.NODE_ENV === "development") {
    plugins.push(createLogger())
}

export default createStore({
  plugins,
  state() {
    return {
    }
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    dashboard
  }
})
