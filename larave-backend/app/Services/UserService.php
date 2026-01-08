<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\Eloquent\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class UserService
{
    protected $userRepo;

    public function __construct(UserRepository $userRepo){
        $this->userRepo = $userRepo;
    }

    public function create(array $data):User
    {
        return $this->userRepo->create($data);
    }

    public function update(int $id, array $data):User
    {
        return $this->userRepo->update($id, $data);
    }

    public function logOut(Request $request):Response
    {
        
    }
}