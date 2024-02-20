<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-3xl font-extrabold">
      Summary
    </h1>
    <div>
      <USelectMenu v-model="selected" :options="transactionPeriod"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {transactionPeriod} from "~/constants";

const selected = ref(transactionPeriod[1])
</script>

<style scoped>

</style>