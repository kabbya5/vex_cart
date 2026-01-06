<template>
    <div class="flex justify-between">
        <div class="relative rounded-xl bg-gray-200 min-w-[250px] p-5 bg-center bg-cover" 
            :style="{backgroundImage:`url(${img})`}">

            <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
            <div class="flex items-center justfy-between">

                <div class="flex flex-col relative">
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Man </NuxtLink>

                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Sport suits </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Trousers </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Jackets </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Shirts </NuxtLink>
                </div>

            </div>
        </div>

        <div class="relative rounded-xl bg-gray-200 min-w-[250px] p-5 bg-center bg-cover" 
            :style="{backgroundImage:`url(${img})`}">

            <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
            <div class="flex items-center justfy-between">

                <div class="flex flex-col relative">
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Man </NuxtLink>

                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Sport suits </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Trousers </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Jackets </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Shirts </NuxtLink>
                </div>

            </div>
        </div>

        <div class="relative rounded-xl bg-gray-200 min-w-[250px] p-5 bg-center bg-cover" 
            :style="{backgroundImage:`url(${img})`}">

            <div class="absolute inset-0 bg-black/50 rounded-xl"></div>
            <div class="flex items-center justfy-between">

                <div class="flex flex-col relative">
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Man </NuxtLink>

                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Sport suits </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Trousers </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white">  Jackets </NuxtLink>
                    <NuxtLink :to="`category/man`" class="font-semibold mb-1 text-white"> Shirts </NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    const img = ref('https://img.freepik.com/free-photo/young-handsome-man-choosing-cloth-shop_1303-19845.jpg?semt=ais_hybrid&w=740&q=80');
</script>