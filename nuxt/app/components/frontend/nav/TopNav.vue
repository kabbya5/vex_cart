<template>
  <header class="top-navigation bg-topnav-bg border-b border-border-color">
    <!-- Top bar / branding -->
    <div class="container mx-auto py-2">
      <div class="grid grid-cols-12 items-center gap-4">
        <!-- Logo -->
        <div class="logo col-span-2">
          <NuxtLink to="/" class="font-bold text-lg">
            Home
          </NuxtLink>
        </div>

        <div class="col-span-4 text-sm">
            <a href=""> Contact: 01943958348346 </a>
            <a href=""> Email: kdhsli345@gamli.com </a>
        </div>

        <!-- Navigation Links -->
        <div class="col-span-6">
          <nav class="flex flex-wrap justify-center md:justify-end gap-4">
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 1</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 2</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 3</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 4</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 5</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 6</NuxtLink>
            <NuxtLink to="/shop" class="hover:text-blue-500">Shop 7</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// No changes needed
</script>

