<template>
    <div>
        <div class="min-w-[300px] bg-red-500">
            <ul>
                <li v-for="sidebar in sidebars">
                    <h2> {{ sidebar.name }} </h2>
                    <ul> 
                        <li v-for="child in sidebar.childs">
                            <NuxtLink :to="child.link"> {{ child.name }} </NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
    const sidebars = [
        {
            name:'dashboard',
            title:'Dashboard',
            childs:[{
                name:'thems',
                title:'Thems',
                link:'/admin/themes'
            }]
        },
    ]
</script>