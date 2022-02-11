<template>
    <div class="mb-2 flex justify-between">
        <label class="text-md" :for='name'>{{label}}</label>
        <div>
            <input :id="name"  class="border-2 focus:outline-none rounded-md"  :name='name'/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        label:String,
        name:String
    }
}
</script>