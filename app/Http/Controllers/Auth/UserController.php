<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use App\Jobs\PasswordJob;
use App\User;
use Illuminate\Http\Request; 

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    } 
    public function current(Request $request)
    {
        return  auth()->user();
    }
    public function getUsers()
    { 
        return User::get();
    }
    
    public function changePassword(Request $request){
        User::where("id",auth()->user()->id)->update([
            'password' => bcrypt($request->password),
        ]);
        return true;
    }

 
   


}
