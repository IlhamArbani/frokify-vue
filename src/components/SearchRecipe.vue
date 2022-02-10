<template>
    <div>
        <input v-model="search" class="rounded-full focus:outline-none px-3 py-2 w-96 h-9"/>
        <button @click="getRecipe" class="-ml-20 h-9 rounded-full text-xl bg-gradient-to-r text-white from-orange-200 to-orange-400 w-40" onClick=''>
            Search
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            search: ''
        }
    },
    methods: {
        setLoadingTrue(){
            this.$store.dispatch('loadingRecipeIsTrue')
        },
        getRecipe(){
            this.$store.dispatch('recipe/getRecipeItem',{value:this.search})
        }
    }
}
</script>
