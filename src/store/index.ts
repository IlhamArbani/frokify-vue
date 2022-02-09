import { createStore } from 'vuex'

import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions';
import {State} from './model'



const state: State = {
    loading: false,
    detailLoading: false,
    showModalRecipe: false
} 


const store = createStore({
    state,
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
})

export default store;
