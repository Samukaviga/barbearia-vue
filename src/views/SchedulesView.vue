<template>

  <AppLayout>
    <Schedules :days="days" />
    <ButtonLayout>

      <Button nameButton="Novo">

        <font-awesome-icon :icon="['fas', 'calendar-plus']" />

      </Button>

    </ButtonLayout>

    <FormSchedule @add-new-service="AddNewService" />
  </AppLayout>

</template>

<script setup>
import Button from '@/components/ButtonAccess/Button.vue';
import ButtonLayout from '@/components/ButtonAccess/ButtonLayout.vue';

import FormSchedule from '@/components/Schedules/FormSchedule.vue';
import Schedules from '@/components/Schedules/Schedules.vue';
import AppLayout from '@/layout/AppLayout.vue';

import { reactive } from 'vue'


const days = reactive([
  {
    id: 1,
    label: 'SEX',
    number: 24,
    schedules_number: 4,
    invoicing: "210,00",
    active: false,
    schedule: [
      {
        name: 'Lucas',
        price: '45,00',
        service: 'Corte Social',
        time: '20 min'
      },
      {
        name: 'Henrique',
        price: '60,00',
        service: 'Cabelo e Barba',
        time: '30 min'
      },
      {
        name: 'Fábio',
        price: '50,00',
        service: 'Corte Degradê',
        time: '25 min'
      },
      {
        name: 'Diego',
        price: '55,00',
        service: 'Barba',
        time: '15 min'
      },
    ]
  },
  {
    id: 2,
    label: 'SÁB',
    number: 25,
    schedules_number: 12,
    invoicing: "650,00",
    active: true,
    schedule: [
      {
        name: 'Rafael',
        price: '70,00',
        service: 'Cabelo e Barba',
        time: '35 min'
      },
      {
        name: 'André',
        price: '40,00',
        service: 'Corte Simples',
        time: '20 min'
      },
      {
        name: 'Eduardo',
        price: '60,00',
        service: 'Degradê com Navalha',
        time: '25 min'
      },
      {
        name: 'Marcos',
        price: '50,00',
        service: 'Cabelo',
        time: '15 min'
      },
      {
        name: 'Igor',
        price: '55,00',
        service: 'Barba Completa',
        time: '20 min'
      },
      {
        name: 'Vitor',
        price: '45,00',
        service: 'Corte Infantil',
        time: '25 min'
      },
    ]
  },
  {
    id: 3,
    label: 'DOM',
    number: 26,
    schedules_number: 6,
    invoicing: "380,00",
    active: false,
    schedule: [
      {
        name: 'Igor',
        price: '55,00',
        service: 'Barba Completa',
        time: '20 min'
      },
      {
        name: 'Vitor',
        price: '45,00',
        service: 'Corte Infantil',
        time: '25 min'
      },
      {
        name: 'Felipe',
        price: '70,00',
        service: 'Cabelo e Barba',
        time: '30 min'
      },
      {
        name: 'Douglas',
        price: '50,00',
        service: 'Corte Clássico',
        time: '20 min'
      },
      {
        name: 'Douglas',
        price: '50,00',
        service: 'Corte Clássico',
        time: '20 min'
      },
    ]
  },
  {
    id: 4,
    label: 'SEG',
    number: 27,
    schedules_number: 14,
    invoicing: "730,00",
    active: false,
    schedule: [
      {
        name: 'Murilo',
        price: '40,00',
        service: 'Corte Máquina',
        time: '15 min'
      },
      {
        name: 'Ricardo',
        price: '55,00',
        service: 'Cabelo e Barba',
        time: '30 min'
      },
      {
        name: 'Paulo',
        price: '45,00',
        service: 'Corte Social',
        time: '20 min'
      },
      {
        name: 'Bruno',
        price: '60,00',
        service: 'Degradê com Tesoura',
        time: '25 min'
      },
      {
        name: 'Rodrigo',
        price: '70,00',
        service: 'Cabelo e Barba',
        time: '30 min'
      },
      {
        name: 'Júlio',
        price: '45,00',
        service: 'Corte Social',
        time: '20 min'
      },
      {
        name: 'Marcelo',
        price: '50,00',
        service: 'Barba',
        time: '15 min'
      },
      {
        name: 'Renan',
        price: '60,00',
        service: 'Degradê com Tesoura',
        time: '25 min'
      },
    ]
  },
  {
    id: 5,
    label: 'TER',
    number: 28,
    schedules_number: 3,
    invoicing: "510,00",
    active: false,
    schedule: [
      {
        name: 'Rodrigo',
        price: '70,00',
        service: 'Cabelo e Barba',
        time: '30 min'
      },
      {
        name: 'Júlio',
        price: '45,00',
        service: 'Corte Social',
        time: '20 min'
      },
      {
        name: 'Marcelo',
        price: '50,00',
        service: 'Barba',
        time: '15 min'
      },

    ]
  },
  {
    id: 6,
    label: 'QUA',
    number: 29,
    schedules_number: 11,
    invoicing: "610,00",
    active: false,
    schedule: [
      {
        name: 'Caio',
        price: '50,00',
        service: 'Corte Clássico',
        time: '20 min'
      },
      {
        name: 'Renan',
        price: '60,00',
        service: 'Degradê com Tesoura',
        time: '25 min'
      },
      {
        name: 'Léo',
        price: '70,00',
        service: 'Cabelo e Barba',
        time: '35 min'
      },
      {
        name: 'Gustavo',
        price: '55,00',
        service: 'Degradê',
        time: '25 min'
      },
      {
        name: 'Alex',
        price: '45,00',
        service: 'Barba',
        time: '15 min'
      },
    ]
  },
])


</script>
