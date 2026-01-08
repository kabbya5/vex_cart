<template>
    <div>
        <FrontendLoginForm v-if="isLoginForm" @close="isLoginForm=false"/>
        <header class="main-navigation">
            <!-- Main navigation -->
            <div class="container mx-auto py-2">
                <div class="flex justify-between items-center">
                    <div class="min-w-fit">
                        <div class="h-full min-w-fit flex items-center">
                            <i class="fa-solid fa-bars"></i>
                            <span> Browse Category </span>
                            <i class="fa-solid fa-angle-down"></i>
                            <i class="fa-solid fa-angle-up"></i>
                        </div>
                    </div>

                    <div class="search-box">
                        <form action="">
                            <div class="navbar-search-box flex items-center">
                                <input type="text" class="navbar-search-input text-white" placeholder=" Search Heare">
                                <button class="navbar-search-btn"> <i class="fa-solid fa-search"></i> Search </button>
                            </div>
                        </form>
                    </div>

                    <div class="cart-seaction flex items-center justify-between">

                        <NuxtLink> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-code-compare"></i>   
                                <span class="count"> 4  </span>
                            </span>
                            
                            <span class="pl-2">  Compair  </span>  
                        </NuxtLink>

                        <NuxtLink class=""> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-heart"></i>   
                                <span class="count"> 4  </span>
                            </span>
                            
                            <span class="pl-2"> Wishlist  </span> 
                        </NuxtLink>

                        <NuxtLink class=""> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-basket-shopping"></i>   
                                <span class="count"> 4  </span>
                            </span>
                            
                            <span class="pl-2"> Cart  </span> 
                        </NuxtLink>

                        <button @click="isLoginForm = true"> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-arrow-right-to-bracket"></i>   
                            </span>
                            
                            <span class="pl-1"> Login </span> 
                        </button>

                        <!-- <NuxtLink class=""> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-basket-shopping"></i>   
                                <span class="count"> 4  </span>
                            </span>
                            
                            <span class="pl-2"> Cart  </span> 
                        </NuxtLink>

                        <NuxtLink class=""> 
                            <span class="cart-items"> 
                                <i class="fa-solid fa-basket-shopping"></i>   
                                <span class="count"> 4  </span>
                            </span>
                            
                            <span class="pl-2"> Cart  </span> 
                        </NuxtLink> -->

                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">

    const isLoginForm = ref<boolean>(false);
</script>