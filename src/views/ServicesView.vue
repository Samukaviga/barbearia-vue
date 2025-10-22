<template>


  <AppLayout>
    <Services :services="services" />
    <ButtonAccessLayout>

      <Button nameButton="Novo">

        <font-awesome-icon :icon="['fas', 'file-circle-plus']" />

      </Button>

    </ButtonAccessLayout>

     <FormService @add-new-service="AddNewService" />

  </AppLayout>


</template>

<script setup lang="ts">

import { onMounted, reactive } from 'vue'
import { initFlowbite } from 'flowbite'
import AppLayout from '@/layout/AppLayout.vue';
import Services from '@/components/Services/Services.vue';

import ButtonAccessLayout from '@/components/ButtonAccess/ButtonLayout.vue';
import Button from '@/components/ButtonAccess/Button.vue';
import FormService from '@/components/Services/FormService.vue';


const services = reactive([
  {
    id: 1,
    name: "Cabelo",
    price: "30,00",
    time: '30:00'
  },
  {
    id: 2,
    name: "Sobrancelha",
    price: "18,00",
    time: "15:00"
  }
]);

function AddNewService(service) {

  services.push({
    id: services.length + 1,
    name: service.name,
    price: service.price.toFixed(2).replace('.', ','),
    time: service.time
  });


}

onMounted(() => {
  initFlowbite();
})

</script>
