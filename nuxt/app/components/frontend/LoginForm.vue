<template>
    <div class="fixed top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center z-50" @click="$emit('close')">
        <div class="w-full max-w-md default-modal" @click.stop>

            <h2 class="header-title"> Login </h2>
            
            <form action="" class="mt-4">
                <div class="form-group">
                    <label for=""> Email </label>
                    <input class="form-control" type="text" placeholder="Enter your email">
                </div>

                <div class="form-group">
                    <label for=""> Password </label>
                    <input class="form-control" type="text" placeholder="Enter your email">
                </div>

                <div class="flex justify-end">
                    <NuxtLink to="/"> Forgot password? </NuxtLink>
                </div>

                <div class="form-group mt-4">
                    <button type="submit" class="w-full rounded-full btn btn-lg btn-primary"> Login </button>
                </div>
            </form>

            <div class="social-loging-section">
                <h2> 
                    Don't have account signup now?  
                </h2>
            </div>
        </div>
    </div>
</template>