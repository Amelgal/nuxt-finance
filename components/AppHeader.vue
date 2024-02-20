<template>
  <header class="flex justify-between items-center py-4">
    <nuxt-link to="/" class="text-2xl font-bold">Finance</nuxt-link>
    <nav>
      <nuxt-link to="/" class="mr-4">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
    <template>
      <UAvatar
          size="sm"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
      />
    </template>

  </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>