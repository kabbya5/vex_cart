<template>
    <div>
        <div v-if="alertStore.alerts.length > 0" class="toastBox">
            <div v-for="(alert, index) in alertStore.alerts" :key="index" :class="alert.status" class="toast flex items-center">
                <div class="icon-box flex items-center">
                    <i class="fa-solid fa-check"></i>
                </div>

                <p class="toast_text"> {{ alert.message }}  </p>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {useAlertStore} from '~/stores/alert';
const alertStore = useAlertStore();



</script>