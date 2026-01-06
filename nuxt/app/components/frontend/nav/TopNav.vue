<template>
  <header class="top-navigation bg-topnav-bg">
    <!-- Top bar / branding -->
    <div class="container mx-auto py-2">
      <div class="flex justify-between items-center gap-4">
        <!-- Logo -->
        <div class="logo">
          <NuxtLink to="/" class="font-bold text-lg">
            Home
          </NuxtLink>
        </div>
        <!-- Navigation Links -->
        <div class="">
          <nav class="">
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500"> Contact </NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500"> Service </NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500"> Block </NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 5</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 6</NuxtLink>
            <ThemToggler/>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No changes needed
</script>

