import { State } from './model'

import recipeActions from './actions';
import recipeMutations from './mutations';
import recipeGetters from './getters';

const state: State = {
    bookmarked: [],
    recipe: [],
    detailRecipe: {},
    myRecipe: []
}

export default {
    namespaced: true,
    state,
    mutations: recipeMutations,
    actions: recipeActions,
    getters: recipeGetters
}