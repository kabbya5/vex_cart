<script setup lang="ts">
import Navbar from '~/components/frontend/Navbar.vue';

</script>

<template>
    <div class="bg-front">
        <Navbar/>
        <slot/>
    </div>
</template>