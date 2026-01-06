<template>
    <div>
        <div class="text-white w-32 relative">
            <button @click="showTheme = !showTheme" 
                class="flex item-center justify-between w-full">
                <span> Theme </span>
                <i class="fa-solid" :class="showTheme ? 'fa-angle-down' : 'fa-angle-up'"></i>
            </button>

            <div v-if="showTheme" class="absolute top-10 left-0">
                <ul class="flex-col">
                    <li v-for="theme in themes">
                        <button  @click="themeToggler(theme.name)" class="">
                            {{ theme.name }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    import { useThemeStore } from '~/stores/themeStore';

    const themeStore = useThemeStore();

    const showTheme = ref<boolean>(false);

    const themes = [
        {
            title:'Light',
            name: 'light',
            icon: 'fa-solid fa-sun'
        },
        {
            title:'Dark',
            name: 'Dark',
            icon: 'fa-solid fa-moon'
        },
    ];

    const themeToggler = (theme:string) =>{
        themeStore.setTheme(theme);
    }

    onMounted (() => {
        themeStore.initTheme();
    });
</script>

<style class="">

</style>