<template>
    <div class="w-full flex items-center justify-between px-5 h-28">
        <div class="flex items-center">
            <img class="h-20 w-20" src='../../assets/logo.png' alt=""/>
            <h1 class="font-lobster text-3xl">Frokify</h1>
        </div>
        <search-recipe></search-recipe>
        <div class="flex">
            <AddRecipe />
            <Bookmark />
        </div>
    </div>
</template>

<script>
import SearchRecipe from '../SearchRecipe.vue'
import Bookmark from '../BookMark.vue'
import AddRecipe from '../AddRecipe.vue'
export default {
    components:{
        SearchRecipe,
        Bookmark,
        AddRecipe
    }
}
</script>
