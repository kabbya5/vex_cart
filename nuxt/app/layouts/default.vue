<script setup lang="ts">
import Navbar from '~/components/frontend/nav/Navbar.vue';
import TopNav from '~/components/frontend/nav/TopNav.vue';

</script>

<template>
    <div class="bg-front">
        <TopNav/>
        <Navbar/>
        <slot/>
    </div>
</template>