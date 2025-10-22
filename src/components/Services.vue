<template>


  <div class="flex flex-col gap-5 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6 ">

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

        <div class="flex items-center font-bold text-gray-200 text-lg">
          R$ {{ service.price }}
        </div>

      </div>
    </div>
    <!-- End Card -->


  </div>


</template>

<script lang="ts" setup>

import { reactive } from 'vue'

const services = reactive([
  {
    id: 1,
    name: "Cabelo",
    price: "30,00",
    time: '30:00'
  },
  {
    id: 1,
    name: "Sobrancelha",
    price: "18,00",
    time: "15:00"
  }
]);




</script>
