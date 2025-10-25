<template>

  <div class="w-full max-w-sm h-full mt-4 flex flex-col gap-3 px-3">


    <!-- Calendar -->

    <div id="date-range-picker" date-rangepicker class="flex items-center">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input id="datepicker-range-start" name="start" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Inicio">
      </div>
      <span class="mx-4 text-gray-500">Até</span>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input id="datepicker-range-end" name="end" type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Fim">
      </div>
    </div>


    <!-- Calendar -->

    <!-- Select -->
    <div class="flex gap-4">
      <select id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option class="text-center" selected>Profissional</option>
        <option class="text-center" value="US">Jorge</option>
        <option class="text-center" value="CA">Adriano</option>
        <option class="text-center" value="FR">Samuel</option>
      </select>
    </div>
    <!-- Select -->

  </div>

  <!--
  <div class="flex mt-4 space-x-6">
    <div class="bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">
        25
      </p>
      <p class="text-sm text-gray-400">Atendimentos</p>
    </div>
    <div class="bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">5
      </p>
      <p class="text-sm text-gray-400">Novos Clientes</p>
    </div>
  </div>
  <div class="flex mt-4 space-x-6">
    <div class="bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">
        R$ 1350,00
      </p>
      <p class="text-sm text-gray-400">Total Redimento</p>
    </div>

  </div>

-->

  <div class="grid gap-2 mt-2 grid-cols-2 mx-2">

    <div class="cols-span-1 bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">
        25
      </p>
      <p class="text-sm text-gray-400">Atendimentos</p>
    </div>

    <div class="cols-span-1 bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">
        25
      </p>
      <p class="text-sm text-gray-400">Novos Clientes</p>
    </div>

    <div class="col-span-2 bg-gray-900 rounded-lg px-6 py-4 text-center">
      <p class="text-yellow-400 text-2xl font-semibold">
        25
      </p>
      <p class="text-sm text-gray-400">Total Rendimento</p>
    </div>

  </div>






</template>

<script lang="ts" setup>





</script>
