<?php

use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\ThemeController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::controller(AuthController::class)->group(function(){
    Route::post('/register', 'register');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth:api');
});

Route::controller(ThemeController::class)->group(function(){
    Route::post('/themes', 'store');
    Route::get('/get/theme/default', 'show');
});
