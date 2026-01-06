<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Theme extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'colors',
    ];

    protected $casts = [
        'colors' => 'array',
    ];
}
