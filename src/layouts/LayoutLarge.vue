<script setup>
import HeaderLarge from '@/components/templates/large/HeaderLarge.vue'
import FooterLarge from '@/components/templates/large/FooterLarge.vue';
</script>

<template>
    <div id="layout-large">
      <header>
        <HeaderLarge />
      </header>
      <main>
        <router-view />
      </main>
      <footer>
        <FooterLarge />
      </footer>
    </div>
  </template>

<style scoped>
</style>