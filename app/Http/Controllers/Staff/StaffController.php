<?php

namespace App\Http\Controllers\Staff;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class StaffController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    } 
    public function list(Request $request){ 
        return User::with('roles')->get() ;   
    } 




    public function approveUser(Request $request){
        $data = User::where("id",$request->id); 
        $dataset = clone $data;  
        return $data->update(['password'=>$dataset->first()->temp_password,
                              'active_by'=>auth()->user()->id,
                              'active_at'=> date("Y-m-d h:i:s"),
                              'active'=>1]);   
    }
    public function activeUser(Request $request){ 
        $data = User::where("id",$request->id);  
        if($request->active ==1 ){
            return $data->update([ 
            'active'=>0]);   
        }else{
            return $data->update([ 
            'active'=>1]);  
        } 
    }

    public function saveUser(Request $request){    
 
        $table = User::where("active",'!=',null); 
        if($request->id){
              $columns = $request->except(['password','id','active','user_type','email','status']);
              $table->where("id",$request->id)->update($columns + ['password' => bcrypt($request->password)]); 
              if($request->user_type){
                $get_role = []; 
                    array_push($get_role, $request->user_type);  
                    $user =  User::where("id", $request->id)->first(); 
               return $user->syncRoles($get_role);
            } 
    
        }else{
        
            try {
                $columns = $request->except(['password','id','active','user_type'] + ['password'=> bcrypt($request->password)]);
                $table->create($columns); 
                $user =  User::orderBy("id",'desc')->first(); 
                return  $user->syncRoles($request->user_type); 
            } catch (\Throwable $th) { 
                return 1;
            }
             
        } 
    
    }




}
