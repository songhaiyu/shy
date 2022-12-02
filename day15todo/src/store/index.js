import Vue from 'vue'
import Vuex from 'vuex'
import plugin from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calendarData: []

  },
  getters: {
  },
  mutations: {
    addToDos(state, obj) {
      state.calendarData.push(obj)
    },
    todoUpdata(state, obj) {
      state.calendarData[obj.index].things = obj.name
      state.calendarData[obj.index].status = obj.status
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [plugin()]
})
