<?php

namespace App\Providers;

use App\Services\UserService;
use Illuminate\Support\ServiceProvider;
use Laravel\Passport\Passport;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Passport::ignoreRoutes();   

        $this->app->singleton('userService',function($app){
            return new UserService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
