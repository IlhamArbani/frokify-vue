<template>
    <div class="h-full w-full">
        <div class="w-full h-80 bg-no-repeat bg-cover relative" :style="`background-image:url(${recipe.image_url})`">
            <div class="h-full w-full bg-orange-500 opacity-50 justify-center">
            </div>
            <div class="absolute -bottom-3 left-2/4 -ml-48 w-96">
                <h1 class="leading-9 px-4 -rotate-2 text-white text-4xl opacity-100 text-center">
                    <span class="bg-gradient-to-r from-orange-200 to-orange-400">
                        {{recipe.title}}
                    </span>
                </h1>
            </div>
        </div>
        <div class="w-full bg-white flex justify-between py-12 items-center px-12">
            <p>60 Minutes</p>
            <!-- <ServingCounter/> -->
            <button v-if="isMarked" @click="unsetBookmarked(recipe.recipe_id)" class='h-12 w-12 rounded-full  bg-blue-400'></button> 
            <button v-else @click='setBookmarked(recipe)' class='h-12 w-12 rounded-full  bg-orange-400'></button>
        </div>
        <div class="w-full px-6 flex flex-col items-center py-4">
            <h1 class="text-orange-300 font-bold text-xl text-center mb-6">Recipe Ingredients</h1>
            <div class="grid grid-rows-8 grid-cols-2 grid-flow-row gap-2">
                <p class="text-orange-500" v-for="ingridient in recipe.ingredients" :key="ingridient">{{ingridient}}</p>
            </div>
        </div>
        <div class="flex flex-col items-center px-12 bg-orange-50 py-6">
            <h1 class="text-orange-400 text-xl">HOW TO COOK IT</h1>
            <p class="text-center text-gray-400 py-5">This recipe was carefully designed and tested by The Pioneer Woman. Please check out directions at their website.</p>
            <a class="px-12 py-4 rounded-full bg-orange-300 text-white" :href="recipe.source_url">Directions</a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        recipe: Object
    },
    methods:{
        setBookmarked(recipe){
            this.$store.dispatch('recipe/setBookmark',{value:recipe})
        }, unsetBookmarked(id){
            this.$store.dispatch('recipe/unsetBookmark',{value: id});
        }
    },
    computed:{
        isMarked(){
            // return this.$store.state.recipe.bookmarked.find(e => e.recipe_id === this.recipe.recipe_id )
            return this.$store.getters['recipe/checkBookmarkedRecipe'](this.recipe.recipe_id)
        }
    }
}
</script>