<template>
  <div class="w-full h-full flex flex-col">
    <main class=" w-full h-full flex flex-col justify-center items-center ">
      <slot />
    </main>
    <NavBar />
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import NavBar from '@/components/NavBar.vue';

onMounted(() => {
  initFlowbite();
})

onMounted(() => {
  setTimeout(() => window.HSStaticMethods.autoInit(), 100)
});
</script>
