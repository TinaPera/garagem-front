<script setup>
import { useLayout  } from '@/composables/layouts';

const { layout } = useLayout();
</script>

<template>
    <component :is="layout"/>
</template>