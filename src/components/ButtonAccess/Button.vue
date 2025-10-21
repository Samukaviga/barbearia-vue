<template>

  <button type="button" data-tooltip-target="tooltip-copy" data-tooltip-placement="left"
    class="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-xs dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">

  <slot />

    <span class="sr-only">{{ nameButton }}</span>
  </button>
  <div id="tooltip-copy" role="tooltip"
    class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
    {{ nameButton }}
    <div class="tooltip-arrow" data-popper-arrow></div>
  </div>


</template>

<script lang="ts" setup>

const props = defineProps(['nameButton'])

</script>
