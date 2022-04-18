<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Profiles;
use App\User;
use Illuminate\Http\Request; 

class AccountsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function list(Request $request){
 
        $return = [];
        foreach (User::get() as $key => $value) {
            $temp=[];
   
            $temp['id'] = $value->id; 
            $temp['fullname'] = $value->fullname;
            $temp['first_name'] = $value->first_name;
            $temp['last_name'] = $value->last_name;
            $temp['middle_name'] = $value->middle_name; 
            $temp['contact_no'] = $value->contact_no; 
            $temp['address'] = $value->address; 
            $temp['birth_date'] = $value->birth_date; 
            $temp['picture'] = $value->picture; 
            $temp['email'] = $value->email; 
            $temp['active'] = $value->active; 
            $temp['type'] = $value->type; 
            array_push($return,$temp);
        } 
        return $return;
    }

    public function saveUser(Request $request){  
        $tbl1 = User::where("active",'!=', 0); 
        $tbl1_col = [
            'nick_name'=>$request->nick_name,
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'middle_name'=>$request->middle_name,
            'contact_no'=>$request->contact_no,
            'address'=>$request->address,
            'picture'=> $request->picture,
            'birth_date'=>$request->birth_date,
            'email'=>$request->email,
            'active'=>$request->active,
            'type'=>$request->type,
            
        ]; 
       
     

        if($request->id){
            $tbl1->where("id",$request->id)->update($tbl1_col); 
            if($request->type == 2){
                $user =  User::where("id",$request->id)->first(); 
                $user->syncRoles("Admin");  
                $permissions = $user->getPermissionsViaRoles("Admin"); 
                $user->syncPermissions($permissions);
            }else{
                $user =  User::where("id",$request->id)->first(); 
                $user->syncRoles("Client");  
                $permissions = $user->getPermissionsViaRoles("Client"); 
                $user->syncPermissions($permissions);
            }
        }else{
            
            $tbl1_clone = clone $tbl1;
            $tbl1_clone->create($tbl1_col);  
            if($request->type == 2){
                $user =  User::orderBy("id","desc")->first(); 
                $user->syncRoles("Admin");  
                $permissions = $user->getPermissionsViaRoles("Admin"); 
                $user->syncPermissions($permissions);
            }else{
                $user =  User::orderBy("id","desc")->first(); 
                $user->syncRoles("Client");  
                $permissions = $user->getPermissionsViaRoles("Client"); 
                $user->syncPermissions($permissions);
            }
         
        }
        return $request->all();
    } 

    public function attachmentUser(Request $request){
        $return = []; 
            $temp = [];
            $img = $request->file[0];
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/vet/user', $newfilename); 
        return  $newfilename  ;
    }

    public function activeUser(Request $request){   
        return User::where("id",$request->id)->update(['active'=> $request->active??0 ]);
    }


}
