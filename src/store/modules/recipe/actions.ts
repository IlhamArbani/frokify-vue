import axios from "axios"
import { ActionTypes, Api } from "../../const"

export default {
    getRecipeItem(context: any, payload: { value: String }) {
        context.commit(ActionTypes.SET_LOADING_RECIPE, { value: true }, { root: true })
        axios.get(`${Api.url}/search?q=${payload.value}`)
            .then(e => {
                context.commit(ActionTypes.SET_RECIPE_ITEM, { value: e.data.recipes })
            })
            .catch(e => {

            })
            .finally(() => {
                context.commit(ActionTypes.SET_LOADING_RECIPE, { value: false }, { root: true })
            })
    },
    getDetailRecipe(context: any, payload: { value: String }) {
        context.commit(ActionTypes.SET_LOADING_DETAIL_RECIPE, { value: true }, { root: true });
        axios.get(`${Api.url}/get?rId=${payload.value}`)
            .then(e => {
                context.commit(ActionTypes.SET_DETAIL_RECIPE, { value: e.data.recipe })
            })
            .catch(e => {

            })
            .finally(() => {
                context.commit(ActionTypes.SET_LOADING_DETAIL_RECIPE, { value: false }, { root: true })
            })
    },
    setBookmark(context: any, payload: { value: {} }) {
        context.commit(ActionTypes.SET_BOOKMARK, { value: payload })
    }
}