<template>
    <div class="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
        <div class="bg-gray-100 rounded-md shadow-md w-full h-352 min-h-screen mx-auto flex flex-col">
            <the-header></the-header>
            <div className="flex flex-1 overflow-hidden">
                    <div className="w-2/5 flex flex-col bg-white rounded-sm overflow-y-auto">
                        <Loading v-if="isLoading"/>
                        <!-- <RecipeItem/> -->
                        
                    </div>
                    <div className="w-3/ overflow-y-auto">
                        
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../components/Loading.vue'
// import RecipeItem from '../components/RecipeItems.vue'
export default {
    components:{
        Loading,
        // RecipeItem
    },
    computed: {
        isLoading(){
            return this.$store.getters.loadingRecipe
        }
    },
}
</script>