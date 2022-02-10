import {State} from './model'

export default {
    setLoadingRecipe(state: State, payload: { value: boolean }) {
        state.loading = payload.value;
    },
    setLoadingDetailRecipe(state: State, payload: { value: boolean }) {
        state.detailLoading = payload.value;
    },
    setModal(state: State, payload: { value: boolean }) {
        state.showModalRecipe = payload.value
    }
}