import {State} from './model'

export default {
    setLoadingRecipe(state: State,payload: {isLoading: boolean}){
        state.loading = payload.isLoading;
    },
    setLoadingDetailRecipe(state: State, payload:{isLodaingDetail: boolean}){
        state.detailLoading = payload.isLodaingDetail;
    },
    setModal(state: State, payload:{isModal: boolean}){
        state.showModalRecipe = payload.isModal
    }
}