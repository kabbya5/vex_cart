<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request){

        $request->validate([
            'first_name' => 'required|min:2|max:100',
            'last_name' => 'required|min:3|max:100',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $data = $request->except('password');
        $data['password'] = Hash::make($request->password);

        $user = User::create($data);

        $token = $user->createToken('authToken')->accessToken;

        return response()->json([
            'success' => true,
            'user'    => $user,
            'token'   => $token
        ], 201);

    }
}
