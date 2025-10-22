<template>


  <AppLayout>
    <Client />
    <ButtonAccessLayout>

      <Button nameButton="Novo">

        <font-awesome-icon icon="fa-solid fa-user-plus" />

      </Button>

    </ButtonAccessLayout>

    <FormClient />

  </AppLayout>

</template>

<script lang="ts" setup>

import Client from '@/components/Client/Client.vue';
import AppLayout from '@/layout/AppLayout.vue';

import ButtonAccessLayout from '@/components/ButtonAccess/ButtonLayout.vue';
import Button from '@/components/ButtonAccess/Button.vue';
import FormClient from '@/components/Client/FormClient.vue';



</script>
