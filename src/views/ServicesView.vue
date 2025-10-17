<template>


    <AppLayout>
        <Services />
    </AppLayout>


</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import AppLayout from '@/layout/AppLayout.vue';
import Services from '@/components/Services.vue';


onMounted(() => {
    initFlowbite();
})

</script>