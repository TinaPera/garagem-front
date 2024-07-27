<script setup>
import HeaderSmall from '@/components/templates/small/HeaderSmall.vue';
import FooterSmall from '@/components/templates/small/FooterSmall.vue';
</script>

<template>
    <div id="layout-small">
      <header>
        <HeaderSmall />
      </header>
      <main>
        <router-view />
      </main>
      <footer>
        <FooterSmall />
      </footer>
    </div>
  </template>

<style scoped>
</style>