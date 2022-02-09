<template>
    <div className="w-full flex items-center justify-between px-5 h-28">
        <div className="flex items-center">
            <img className="h-20 w-20" src='../../assets/logo.png' alt=""/>
            <h1 className="font-lobster text-3xl">Frokify</h1>
        </div>
        <search-recipe></search-recipe>
        <div className="flex">
            <!-- <AddRecipe Style="mr-12 text-gray-500 text-lg"/>
            <Bookmarks Style="mr-12 text-gray-500 text-lg"/> -->
        </div>
    </div>
</template>

<script>
import SearchRecipe from '../SearchRecipe.vue'
export default {
    components:{
        SearchRecipe
    }
}
</script>
