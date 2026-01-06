<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Theme;
use Illuminate\Http\Request;

class ThemeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'slug' => 'nullable|string|max:100',
            'colors' => 'required|array',
        ]);

        $theme = Theme::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'colors' => $request->colors,
        ]);

        return response()->json([
            'success' => true,
            'theme' => $theme,
        ]);
    }

    public function show(){
        $theme = Theme::first();
        if($theme){
            return response()->json(['data' => $theme->colors]);
        }
    }
}
