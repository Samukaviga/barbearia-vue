<template>
  <div class="w-full h-full flex flex-col">
    <main class=" w-full h-full flex flex-col justify-center items-center ">
      <slot />
    </main>
    <NavBar />
  </div>
</template>

<script lang="ts" setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue';

onMounted(() => {
  initFlowbite();
})

/*
onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
}); */

onMounted(() => {
  setTimeout(() => {
    if (window.HSStaticMethods?.autoInit) {
      window.HSStaticMethods.autoInit()
    } else {
      console.warn('HSStaticMethods ainda não está disponível')
    }
  }, 100)
})
</script>
