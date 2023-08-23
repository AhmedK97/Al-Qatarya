<template>
    <div class="flex flex-col items-center justify-center space-y-4">
        <span class="text-6xl font-normal">
            <slot name="number" />
        </span>
        <div
            class="flex justify-center px-5 py-2 text-xs text-white rounded-full lg:text-base bg-rose-900 hover:bg-rose-700"
        >
            <slot name="title" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
