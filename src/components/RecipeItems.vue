<template>
    <button @click="getDetail(id)">
            <div class="flex w-full justify-center hover:bg-orange-200 py-3 transition-colors ease-out">
                <div class='flex w-4/5'>
                    <img class="rounded-full h-14 w-14 mr-3" :src="image_url"  alt=''/>
                    <div class='truncate'>
                        <h1 class='text-orange-300 truncate text-left'>{{title}}</h1>
                        <p class='text-sm text-gray-400 text-left'>{{publisher}}</p>
                    </div>
                </div>
            </div>
    </button>
</template>

<script>
export default {
    props:{
        title:String,
        publisher:String,
        image_url:String,
        id: String
    },
    methods:{
        getDetail(id){
            this.$store.dispatch('recipe/getDetailRecipe',{value: id})
        }
    }
}
</script>