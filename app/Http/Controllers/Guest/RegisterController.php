<?php

namespace App\Http\Controllers\Guest;

use App\User;
use App\Http\Controllers\Controller;
use App\Jobs\PasswordJob;
use App\Jobs\RegisterJob;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class RegisterController extends Controller
{


    public function resetPassword(Request $request){
      
        if($request->email){
            User::where("id", $request->email)->update([
                'password' => bcrypt($request->password),
            ]);
            return true;
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required', 
            'last_name' => 'required',
            'email' => 'required',
            'password' => 'required',
            're_password' => 'required',
        ]);

        if (User::where("email", $request->email)->get()->count() > 0) {
            return json_encode(['message' => 'Email has been already taken.']);
        } else {
            $data = User::create([ 
                'nick_name' => $request->nick_name,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'middle_name' => $request->middle_name,
                'email' => $request->email, 
                'password' => bcrypt($request->password)
            ]);
           
            $user =  User::where("id", $data->id)->first(); 
            $user->syncRoles(['Client']);
            RegisterJob::dispatch($data, $request->email); 
            return true;
        }
    }
  
    public function getData(Request $request){ 
        return  Crypt::decryptString($request->ref);
    }

    public function sendLink(Request $request)
    {
        if (User::where("email", $request->email)->get()->count() > 0) {
            $temp = [];
            $temp['title'] = 'Reset Password';
            $temp['subject'] = 'Reset Password';
            $temp['message'] = 'Reset Password';
            $temp['details'] = '<a target="_blank" href="' . url('/reset?ref=' . Crypt::encryptString($request->email)) . '" style="color: blue;">Click here</a>';
            PasswordJob::dispatch($temp, $request->email);
            return true;
        } else {
            return false;
        }
    }
}
