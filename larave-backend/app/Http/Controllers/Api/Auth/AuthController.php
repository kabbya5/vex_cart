<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    private $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function register(Request $request){

        $data = $request->validate([
            'first_name' => 'required|min:2|max:100',
            'last_name' => 'required|min:3|max:100',
            'email' => 'required|email|unique:users,email',
            'phone_number' => 'nullable|unique:users,phone_number',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $data['password'] = Hash::make($request->password);

        $user = User::create($data);

        $token = $user->createToken('authToken')->accessToken;

        $response = response()->json([
            'success' => true,
            'user' => $user,
        ]);

        $cookie = cookie('auth_token', $token, 60 * 24, null, null,true, true);

        return $response->withCookie($cookie);
    }

    public function login(Request $request){
        $request->validate([
            'indentifier' => 'required',
            'password' => 'required|min:8',
        ]);

        $indentifier = $request->identifier;

        $user = User::where('email', $indentifier)->orWhere('phone_number', $indentifier)->get();
        
        if(!Hash::check($request->password, $user->password)){
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
                'errors' => [
                    'password' => "Invalid credentials."
                ],
            ],422);
        }

        $token = $user->createToken('authToken')->accessToken;

        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => $user,
        ],201);
    }

    public function logout(Request $request){
        
        $user = $request->user;

        if($user && $user->currentAccessToken()){
            $user->currentAccessTokenDelete();
        }
    }
}
