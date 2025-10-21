<template>


  <AppLayout>
    <Client />
    <ButtonAccessLayout>

      <Button nameButton="Novo">

        <font-awesome-icon icon="fa-solid fa-user-plus" />

      </Button>

    </ButtonAccessLayout>

    <ClientAdd />

  </AppLayout>

</template>

<script lang="ts" setup>

import Client from '@/components/Client.vue';
import AppLayout from '@/layout/AppLayout.vue';

import ButtonAccessLayout from '@/components/ButtonAccess/ButtonLayout.vue';
import Button from '@/components/ButtonAccess/Button.vue';
import ClientAdd from '@/components/Form/ClientAdd.vue';



</script>
