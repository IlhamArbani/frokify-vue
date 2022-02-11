<template>
    <div class="w-full min-h-screen bg-gradient-to-r from-orange-200 to-orange-400 py-28 px-20">
        <div class="bg-gray-100 rounded-md shadow-md w-full h-352 min-h-screen mx-auto flex flex-col">
            <the-header></the-header>
            <div class="flex flex-1 overflow-hidden">
                    <div class="w-2/5 flex flex-col bg-white rounded-sm overflow-y-auto">
                        <Loading v-if="isLoading"/>
                        <RecipeItem v-else-if="recipes" v-for="recipe in recipes" :key="recipe.recipe_id" :title="recipe.title" :publisher="recipe.publisher" :image_url="recipe.image_url" :id="recipe.recipe_id"/>
                    </div>
                    <div class="w-3/ overflow-y-auto">
                        <Loading v-if="isLoadingDetail"/>
                        <DetailRecipe v-else-if="detailRecipe.ingredients" :recipe="detailRecipe"/>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from './Loading.vue'
import RecipeItem from '../../components/RecipeItems.vue'
import DetailRecipe from './DetailRecipe.vue'

export default {
    components:{
        Loading,
        RecipeItem,
        DetailRecipe
    },
    computed: {
        isLoading(){
            return this.$store.getters.loadingRecipe
        },
        recipes(){
            return this.$store.getters['recipe/recipeItem']
        },
        isLoadingDetail(){
            return this.$store.getters.loadingDetailRecipe
        },
        detailRecipe(){
            return this.$store.getters['recipe/detailRecipe']
        }
    },
}
</script>