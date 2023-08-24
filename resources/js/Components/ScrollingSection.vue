<template>
    <div class="scrolling-section" :style="sectionStyle">
        <!-- Content of the section here -->
    </div>
</template>

<script>
export default {
    name: "ScrollingSection",
    data() {
        return {
            scrollPosition: 0,
            contentWidth: 1000, // Adjust this value based on your content width
        };
    },
    computed: {
        sectionStyle() {
            const offset = (window.innerWidth - this.contentWidth) / 2;
            const distance = this.scrollPosition * 0.5; // Adjust the factor for desired sliding speed
            const transform = `translateX(calc(${offset}px - ${distance}px))`;
            return {
                transform,
            };
        },
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY;
        },
    },
};
</script>

<style>
.scrolling-section {
    /* Add any necessary styling for your section */
    /* Make sure to set a fixed height and width */
    height: 500px; /* Adjust as needed */
    width: 100%; /* Adjust as needed */
    overflow: hidden; /* Hide overflowing content */
}
</style>
