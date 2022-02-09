export default{
    loadingRecipe(state: {loading: boolean}){
        return state.loading;
    },
    loadingDetailRecipe(state: {detailLoading: boolean}){
        return state.detailLoading
    },
    showModal(state: {showModalRecipe: boolean}){
        return state.showModalRecipe
    }
}