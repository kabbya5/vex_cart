<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <div class="w-[300px] bg-red-500">
      <AdminSidebar />
    </div>

    <!-- Main content -->
    <div class="flex-1 bg-gray-100 p-4">
      <slot />
    </div>
  </div>
</template>