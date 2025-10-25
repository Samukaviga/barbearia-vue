<template>

  <AppLayout>
    <Schedules />
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


</script>
