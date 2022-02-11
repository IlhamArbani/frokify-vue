<template>
    <div class="relative">
        <button @click='showBookmark' class='mr-12 text-gray-500 text-lg'>Bookmarks</button>
        <div :class="`${bookmarkIsShow? 'flex':'hidden'} flex-col absolute right-0 top-10 bg-white w-52 rounded-lg z-40 h-48 overflow-y-auto`">
            <h1 class="text-orange-400 mt-2 ml-2">Book Marks</h1>
            <RecipeItem v-for="recipe in recipes" :key="recipe.recipe_id" :title="recipe.title" :publisher="recipe.publisher" :id="recipe.recipe_id" :image_url="recipe.image_url" />
        </div>
    </div>
</template>

<script>
import RecipeItem from './RecipeItems.vue'
export default {
    components:{
        RecipeItem
    },
    data(){
        return{
            bookmarkIsShow:false
        }
    },
    methods:{
        showBookmark(){
            this.bookmarkIsShow = !this.bookmarkIsShow
        }
    },
    computed:{
        recipes(){
            return this.$store.getters['recipe/bookmarkItems']
        }
    }
}
</script>