<template>
<div>
    <div class="bg">
        <div class="admin-header flex justify-between">
            <h2> Create </h2>
            <NuxtLink to="/admin/themes"> Themes </NuxtLink>
        </div>

        <form @submit.prevent="handleSubmit" class="my-4">
            <div class="gird gird-cols-12">
                <div class="col-span-12 md-col-span-6 lg-col-span-4">
                    <div class="form-group">
                        <label for=""> Theme Name </label>
                        <input type="text" class="" placeholder="Theme Name">
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script setup lang="ts">

definePageMeta({
    layout:'admin',
})
</script>