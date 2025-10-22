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

      <!-- options -->
      <div class="relative">
        <button :id="`dropdownMenuIconButton-${service.id}`" :data-dropdown-toggle="`dropdownDots-${service.id}`"
          data-dropdown-placement="bottom-start"
          class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800"
          type="button">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="false" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 4 15">
            <path
              d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>

        <div :id="`dropdownDots-${service.id}`"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600">
          <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
            :aria-labelledby="`dropdownMenuIconButton-${service.id}`">
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Editar</a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Excluir</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- options -->


    </div>
  </div>
  <!-- End Card -->


</template>

<script setup lang="ts">

const props = defineProps(['services'])

</script>
