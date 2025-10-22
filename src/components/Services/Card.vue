<template>

  <!-- Card -->
  <div v-for="service in services" :key="service.id"
    class="items-center max-w-[350px] w-[320px] sm:w-[400px] px-2 rounded-lg flex bg-gray-900 hover:bg-gray-900 border-solid hover:border-1 border-blue-900">

    <font-awesome-icon class="text-gray-400 fa-3x" icon="gear" />

    <div class="w-full px-4 py-5 flex justify-between ">
      <div>
        <h3 class="text-xl font-bold tracking-tight text-gray-200 ">
          {{ service.name }}
        </h3>
        <span class="text-gray-500 dark:text-gray-400">{{ service.time }} min</span>
      </div>

      <div class="flex items-center font-bold text-yellow-400 text-lg">
        R$ {{ service.price }}
      </div>

    </div>
  </div>
  <!-- End Card -->


</template>

<script setup lang="ts">

const props = defineProps(['services'])

</script>
