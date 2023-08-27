<template>
    <div v-if="links.length > 3">
        <div class="flex flex-wrap space-x-2 rtl:space-x-reverse">
            <template v-for="(link, key) in links" :key="key">
                <div
                    v-if="link.url === null"
                    class="px-4 py-3 mb-1 text-sm leading-4 bg-white border rounded select-none text-rose-900"
                    v-html="link.label"
                />

                <Link
                    v-else
                    preserve-scroll
                    class="px-4 py-3 mb-1 space-x-3 text-sm font-bold leading-4 border rounded text-secondary-700 bg-rose-900 hover:bg-white hover:text-secondary-600 hover:border-secondary-600"
                    :class="{ 'bg-gray-600': link.active }"
                    :href="link.url"
                    >{{ link.label }}
                </Link>
            </template>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import { Link } from "@inertiajs/vue3";
export default defineComponent({
    components: {
        Link,
    },
    props: {
        links: Array,
    },
});
</script>
