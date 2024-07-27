<script setup>
import { useMonitor } from '@/composables/monitor.js';

const { menu } = useMonitor();

import FooterLarge from '@/components/templates/large/FooterLarge.vue'
</script>

<template>
    <div>
        <component :is="menu"/>
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