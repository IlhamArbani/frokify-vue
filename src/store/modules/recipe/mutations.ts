import { State } from './model'

export default {
    setRecipeItem(state: State, payload: { value: [] }) {
        state.recipe = payload.value
    },
    setDetailRecipe(state: State, payload: { value: {} }) {
        state.detailRecipe = payload.value
    },
    setBookmark(state: State, payload: { value: {} }) {
        state.bookmarked = [...state.bookmarked, payload.value]
    }
}