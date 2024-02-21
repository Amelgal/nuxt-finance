<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-3xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu v-model="selected" :options="transactionPeriod"/>
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <app-trend title="Income" :amount="5780" :last-amount="2550" color="green" :loading="false" />
    <app-trend title="Expense" :amount="2000" :last-amount="7500" color="red" :loading="false" />
    <app-trend title="Investments" :amount="4000" :last-amount="3000" color="green" :loading="true" />
    <app-trend title="Saving" :amount="4000" :last-amount="3000" color="red" :loading="true" />
  </section>
</template>

<script setup lang="ts">
import {transactionPeriod} from "~/constants";

const selected = ref(transactionPeriod[1])
</script>

<style scoped>

</style>