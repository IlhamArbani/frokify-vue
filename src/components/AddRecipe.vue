<template>
    <button @click="togleModal()" class="mr-12 text-gray-500 text-lg"  >Add Recipe</button>
    <teleport to="body">
        <base-card v-if='modalIsShow'>
            <form>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                    <h1 class="mb-3 text-3xl font-bold">Data Recipe</h1>

                        <BaseInput  name='title' label='Title'/>
                        <BaseInput  name='url' label='URL'/>
                        <BaseInput  name='image_url' label='Image URL'/>
                        <BaseInput  name='publisher' label='Publisher'/>
                        <BaseInput  name='prep_time' label='Prep Time'/>
                        <BaseInput  name='servings' label='Servings'/>

                    </div>
                    <div>
                    <h1 class="mb-3 text-3xl font-bold">Ingridients</h1>

                        <BaseInput  name='ingridient1' label='Ingridient 1'/>
                        <BaseInput  name='ingridient2' label='Ingridient 2'/>
                        <BaseInput  name='ingridient3' label='Ingridient 3'/>
                        <BaseInput  name='ingridient4' label='Ingridient 4'/>
                        <BaseInput  name='ingridient5' label='Ingridient 5'/>
                        <BaseInput  name='ingridient6' label='Ingridient 6'/>

                    </div>
                </div>
                <div class="flex justify-center mt-3">
                    <button class="px-12 py-4 rounded-full bg-orange-300 text-white" >Upload</button>
                </div>
            </form>
        </base-card>
    </teleport>
</template>

<script>
export default {
    computed:{
        modalIsShow(){
            return this.$store.getters['showModal']
        }
    },
    methods:{
        togleModal(){
            this.$store.dispatch('showModal')
        }
    }
}
</script>