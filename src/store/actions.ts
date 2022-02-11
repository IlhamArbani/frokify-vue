import {ActionTypes} from './const';

export default {
    loadingRecipeIsTrue(context: any){
        context.commit(ActionTypes.SET_LOADING_RECIPE,{isLoading: true})
    },
    LoadingDetialRecipeIsTrue(context: any){
        context.commit(ActionTypes.SET_LOADING_DETAIL_RECIPE,{isLoadingDetail: true})
    },
    showModal(context: any){
        context.commit(ActionTypes.SET_MODAL)
    },
}