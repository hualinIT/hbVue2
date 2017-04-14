import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    num : 0,
}

var mutations = {
    addNum (state, payload){
        state.num += payload.account;
    }
}
// actions

export default new Vuex.Store({
    state,
    mutations

})

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })
