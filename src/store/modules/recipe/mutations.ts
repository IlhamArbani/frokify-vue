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
    },
    unsetBookmark(state: State, payload: { value: string }) {
        state.bookmarked = state.bookmarked.filter((e: any) => e.recipe_id !== payload.value)
    }   
}