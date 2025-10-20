<template>



  <div
    class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 border rounded-full bottom-4 left-1/2 bg-gray-700 border-gray-600">
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto">

      <router-link to="/service"
        class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-800 group">
        <button data-tooltip-target="tooltip-home" type="button"
          class="inline-flex flex-col items-center justify-center">

          <font-awesome-icon aria-hidden="true" class="fa-xl mb-1 text-gray-400 group-hover:text-blue-500"
            icon="list" />

          <span class="sr-only">Service</span>

        </button>
      </router-link>


      <div id="tooltip-home" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700">
        Service
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>


      <router-link to="client"
        class="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-800 group">
        <button data-tooltip-target="tooltip-wallet" type="button"
          class="inline-flex flex-col items-center justify-center">
          <svg class="w-5 h-5 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path
              d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>
          <span class="sr-only">Clientes</span>
        </button>
      </router-link>


      <div id="tooltip-wallet" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700">
        Clientes
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>


      <div class="flex items-center justify-center">
        <router-link to="/schedules" class="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:outline-none focus:ring-blue-800">
          <button data-tooltip-target="tooltip-new" type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium">
            <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
            </svg>
            <span class="sr-only">Novo agendamento</span>
          </button>
        </router-link>
      </div>
      <div id="tooltip-new" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700">
        Novo agendamento
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <router-link to="/report" class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
        <button data-tooltip-target="tooltip-settings" type="button"
          class="inline-flex flex-col items-center justify-center">

          <font-awesome-icon aria-hidden="true" class="fa-xl mb-1 text-gray-400 group-hover:text-blue-500"
            icon="chart-line" />

          <span class="sr-only">Relatórios</span>
        </button>
      </router-link>
      <div id="tooltip-settings" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700">
        Relatórios
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>

      <button data-tooltip-target="tooltip-profile" type="button"
        class="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-800 group">
        <svg class="w-5 h-5 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        <span class="sr-only">Perfil</span>
      </button>
      <div id="tooltip-profile" role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-xs opacity-0 tooltip bg-gray-700">
        Perfil
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>


</template>

<script setup lang="ts">



</script>
