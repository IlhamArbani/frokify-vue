<template>
    <div class="flex justify-center">
        <div class="bg-white px-12 top-12 rounded-md fixed w-9/12 h-5/6 z-30 flex flex-col justify-center">
            <div class="h-full w-full flex flex-col justify-center relative">
                <button  class="bg-orange-300 h-5 w-5 right-2 rounded-sm absolute top-8 le">
                </button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>