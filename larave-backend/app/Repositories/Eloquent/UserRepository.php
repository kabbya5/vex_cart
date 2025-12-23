<?php 

namespace App\Repositories\Eloquent;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface
{
    public function create(array $data) : User
    {
        return User::create($data);
    }

    public function findByEmail(int $id): ?User
    {
        return User::find($id);
    }

    public function update(int $id, array $data) :?User
    {
        return User::uplade($data);
    }

    public function markEmailVerfied(int $id): bool{

        return User::where('id', $id)->update([
            'email_verified_at' => now(),
        ]);
    }
}