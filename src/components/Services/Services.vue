<template>

  <div class="flex flex-col gap-5 py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6
           overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 ">

    <Card :services="services"/>

  </div>

</template>

<script lang="ts" setup>
import Card from './Card.vue';

const props = defineProps(['services'])


</script>
