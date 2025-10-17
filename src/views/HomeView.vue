<template>

  <AppLayout>
    <h1>olá</h1>
  </AppLayout>


</template>


<script setup lang="ts">

import AppLayout from '@/layout/AppLayout.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'


onMounted(() => {
  initFlowbite();
})

</script>
