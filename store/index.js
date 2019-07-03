// Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：
// 应用层级的状态应该集中到单个 store 对象中。
// 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
// 异步逻辑都应该封装到 action 里面。
// 只要你遵守以上规则，如何组织代码随你便。如果你的 store 文件太大，只需将 action、mutation 和 getter 分割到单独的文件。

import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/assets/js/api.js'
Vue.use(Vuex)

const store = new Vuex.Store({
  state() {
    return {
      userInfo: {},
      gameData: []
    }
  },
  getter: {},
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    },
    setGameData(state, data) {
      state.gameData = data
    },
    updateUserInfo(state, data) {
      for (let key in data) {
        state.userInfo[key] = data[key]
      }
    }
  },
  actions: {
    getUserInfo({ commit /* state */ }, params) {
      API.getUserInfo(params).then(res => {
        const {code, data, msg} = res
        if (!code) {
          commit('setUserInfo', data)
        } else {
          console.log('获取个人信息失败', msg)
        }
      })
    }
  }
})
export { store }
// export default store
