<template>
    <button>
            <div className="flex w-full justify-center hover:bg-orange-200 py-3 transition-colors ease-out">
                <div className='flex w-4/5'>
                    <img className="rounded-full h-14 w-14 mr-3"  alt=''/>
                    <div className='truncate'>
                        <h1 className='text-orange-300 truncate text-left'>{{ttile}}</h1>
                        <p className='text-sm text-gray-400 text-left'>{{publisher}}</p>
                    </div>
                </div>
            </div>
    </button>
</template>

<script>
export default {
    props:{
        title:String,
        publisher:String
    }
}
</script>