<template>
    <div class="w-full bg-green-800 text-white">
        <AdminThemeForm v-if="isModalOpen" :themeId="currentId" @close="isModalOpen=false"/>
        <div class="admin-page-header">
            <h2>Admin Themes Page</h2>
            <nuxtLink to="/admin/themes/create"> Create </nuxtLink>
        </div>
        <div>
            <table class="table whitespace-nowrap min-w-full">
                <thead>
                    <tr class="border-b border-defaultborder">
                        <th scope="col" class="text-start">Name</th>
                        <th scope="col" class="text-start">Created On</th>
                        <th scope="col" class="text-start">Number</th>
                        <th scope="col" class="text-start">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">Mark</th>
                        <td>21,Dec 2021</td>
                        <td>+1234-12340</td>
                        <td><span class="badge bg-outline-primary">Completed</span></td>
                    </tr>
                    <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">Monika</th>
                        <td>29,April 2022</td>
                        <td>+1523-12459</td>
                        <td><span class="badge bg-outline-warning">Failed</span></td>
                    </tr>
                    <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">Madina</th>
                        <td>30,Nov 2022</td>
                        <td>+1982-16234</td>
                        <td><span class="badge bg-outline-success">Successful</span></td>
                    </tr>
                    <tr class="border-b border-defaultborder">
                        <th scope="row" class="text-start">Bhamako</th>
                        <td>18,Mar 2022</td>
                        <td>+1526-10729</td>
                        <td><span class="badge bg-outline-secondary">Pending</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout:'admin',
    })

    const isModalOpen = ref<boolean>(false);
    const currentId = ref<number|null>(null);

    const createUpdateModal = (id : number | null) => {
        currentId.value = id;
        isModalOpen.value = true;
    }
</script>