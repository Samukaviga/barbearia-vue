<template>


  <AppLayout>
    <Services />
    <ButtonAccessLayout>

      <Button nameButton="Novo">

        <font-awesome-icon :icon="['fas', 'file-circle-plus']" />

      </Button>


    </ButtonAccessLayout>

     <FormPopUp />

  </AppLayout>


</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import AppLayout from '@/layout/AppLayout.vue';
import Services from '@/components/Services.vue';

import ButtonAccessLayout from '@/components/ButtonAccess/ButtonLayout.vue';
import Button from '@/components/ButtonAccess/Button.vue';
import FormPopUp from '@/components/Form/ServicePopUp.vue';


onMounted(() => {
  initFlowbite();
})

</script>
