import { State } from './model'

export default {
    recipeItem(state: State) {
        return state.recipe
    },
    detailRecipe(state: State) {
        return state.detailRecipe
    },
    checkBookmarkedRecipe: (state: { bookmarked: [] }) => (id: String = ''): undefined | string => {
        // console.log('from gettrs')
        // console.log(id)
        // return () => {
        //     return state.bookmarked.find((e: any) => e.recipe_id === id)
        // }
        return state.bookmarked.find((e: any) => e.recipe_id === id)
    },
    bookmarkItems(state: State) {
        return state.bookmarked
    }
}