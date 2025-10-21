<template>


    <AppLayout>
        <Services />
        <ButtonAccess />
    </AppLayout>


</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import AppLayout from '@/layout/AppLayout.vue';
import Services from '@/components/Services.vue';
import ButtonAccess from '@/components/ButtonAccess.vue';


onMounted(() => {
    initFlowbite();
})

</script>
