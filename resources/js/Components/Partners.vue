<template>
    <div>
        <!-- Other content here -->
        <PartnerSlider :partnerCompanies="partnerCompanies" />
        <!-- Other content here -->
    </div>
</template>

<script>
import PartnerSlider from "@/Components/PartnerSlider.vue";

export default {
    name: "App",
    components: {
        PartnerSlider,
    },
    data() {
        return {
            partnerCompanies: [
                { name: "Company A", logo: "/path/to/logo1.png" },
                { name: "Company B", logo: "/path/to/logo2.png" },
                // Add more partner company objects as needed
            ],
        };
    },
};
</script>

<style>
/* Add any necessary global styling */
</style>
