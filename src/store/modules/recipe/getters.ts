import { State } from './model'

export default {
    recipeItem(state: State) {
        return state.recipe
    },
    detailRecipe(state: State) {
        return state.detailRecipe
    },
    checkBookmarkedRecipe: (state: { bookmarked: [] }) => (id: String = '') => {
        console.log('from gettrs')
        console.log(id)
        return () => {
            return state.bookmarked.find(e => e === id)
        }
    }
}