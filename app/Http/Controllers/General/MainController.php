<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class MainController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function getRoleList()
    {
        return Role::all();
    }
    public function change_password(Request $request)
    {
        User::where("id", auth()->user()->id)->update([
            'password' => bcrypt($request->password),
        ]);
        return true;
    }



    // roles / permission  
    public function getRoles(Request $request)
    {
        $roles = [];
        if ($request->user) { //upon adding role to user check all exsiting roles.
            foreach (User::with("roles")->where("id", $request->user)->get() as $key => $value) {
                foreach ($value->roles as $key1 => $value1) {
                    $temp = [];
                    $temp['id'] = $value1->id;
                    $temp['name'] = $value1->name;
                    $temp['description'] = $value1->description;
                    array_push($roles, $temp);
                }
            }
        }
        return ['data' => Role::all(), 'selected' => $roles];
    }
    public function storeRole(Request $request)
    {
        $data = Role::query();
        if ($data->where("id", $request->id)->count() > 0) {
            $data = Role::where("id", $request->id)
                ->update([
                    'name' => $request->name,
                    'description' => $request->description
                ]);
        } else {
            $data = Role::create([
                'name' => $request->name,
                'description' => $request->description
            ]);
        }
        return  $request->all();
    }
    public function getPermission(Request $request)
    {
        $permissions = [];
        if ($request->role) {
            $permissions = Role::findByName($request->role)->permissions;
        }
        return ['data' => Permission::all(), 'selected' => $permissions];
    }
    public function getUserRole(Request $request)
    {
        return User::with(["roles"])->get();
    }
    public function storePermission(Request $request)
    {
        $data = Permission::query();
        if ($data->where("id", $request->id)->count() > 0) {
            $temp = $data->where("id", $request->id)
                ->update([
                    'name' => $request->name,
                    'description' => $request->description
                ]);
        } else {
            $temp = $data->create([
                'name' => $request->name,
                'description' => $request->description
            ]);
        }
        return  $request->all();
    }
    public function storeRolePermission(Request $request)
    {
        $get_permission = [];
        foreach ($request->selected as $key => $value) {
            array_push($get_permission, $value['name']);
        }
        $data = Role::where("name", $request->role)->first();
        $data->syncPermissions($get_permission);

        //accessrights

        foreach (User::with("roles")->get() as $key => $value) {
            $get_roles = [];
            foreach ($value->roles as $key1 => $value1) {
                array_push($get_roles, $value1->name);
            }
            $user = User::where("id", $value->id)->first();
            $user->syncRoles($get_roles);
            $get_permission = User::where("id", $value->id)->first()->getPermissionsViaRoles($get_roles);
            $user->syncPermissions($get_permission);
        }
        return true;
    }
    public function storeUserRole(Request $request)
    {

        if ($request->id) {
            User::where("id", $request->id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status
            ]);
            $user =  User::where("id", $request->id)->first();
        } else {
            $data = User::create($request->except('roles') + ['password' => bcrypt(1234)]);
            $user =  User::where("id", $data->id)->first();
        }

        // get the names of role from the list
        $get_role = [];
        foreach ($request->roles as $key => $value) {
            array_push($get_role, $value['name']);
        }

        $user->syncRoles($get_role);
        // get current permission based on role/user selected
        $get_permission = $user->getPermissionsViaRoles($get_role);
        // syncornize permission (add/delete)
        return  $user->syncPermissions($get_permission);
    }
    public function removeUserRole(Request $request)
    {
        $user =  User::where("emplid", 2)->first();
        return  $user->removeRole('Admin');
    }


    //general 
    public function getGeneralList(Request $request)
    {
        return   TblGenerals::where(["active" => 1, 'main' => 1])
           ->paginate(10, '*', 'page', $request->page);
    }


    public function getSubGeneralList(Request $request)
    {
        return TblGenerals::where([ 'group' => $request->group])->get();
    }
    public function getGeneralListGroup(Request $request)
    {
        return TblGenerals::where(['main' => 1])->select("group")->groupBy("group")->get();
    }

    public function storeGeneral(Request $request)
    {

        $table = TblGenerals::where("id", '!=', null);
        if ($request->id) {

            $tbl = clone $table;
            $get_group =  $tbl->where("id", $request->id)->first()->group;

            $tbl = clone $table;
            $tbl->where("description", $get_group)->update(['description' => $request->group]);

            $tbl = clone $table;
            $tbl->where("id", $request->id)->update($request->except(['active', 'group_name', 'created_at', 'updated_at']));
 

            return $request->all();
        } else {
 
            $table->create($request->except(['active', 'group_name']));
            return $request->except('id') + ['id' => $table->orderBy("id", "desc")->first()->id];
        }
    }

    public function activeGeneral(Request $request){
       
      return  TblGenerals::where("id", $request['id'])->update(['active' =>  $request['active']== 1  ]);

    }


    public function createSeeder(Request $request)
    {

        if ($request->id == "leave_sub") {

            $temp_str = '';
            foreach (DB::table("employees")->get() as $key1 => $value1) { //loop user

                $temp_db = DB::table("general_lists")->where(["group" => 11, 'freefield_3' => 1])->get();  //get all list leave
                foreach ($temp_db as $key => $value) { //loop to leave

                    $temp_num = 0;
                    $temp_count = 0;
                    foreach ($temp_db[$key] as $x => $x) {
                        $temp_count++;
                    }
                    foreach ($temp_db[$key] as $k => $v) {
                        $temp_num++;
                        if ($temp_num == $temp_count) {
                            if ($k == 'id') {
                                $temp_str .= '[';
                                switch ($v) {
                                    case 92:
                                        $temp_str .= "'leaveid' => '" . $v . "' ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "'";
                                        $temp_str .= "'description' => 'unlimited'";
                                        $temp_str .= "'active' => '1'";
                                        break;
                                    case 105:
                                        $temp_str .= "'leaveid' => '" . $v . "' ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "'";
                                        $temp_str .= "'description' => '5'";
                                        $temp_str .= "'active' => '1'";
                                        break;
                                    case 96:
                                        $temp_str .= "'leaveid' => '" . $v . "' ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "'";
                                        $temp_str .= "'description' => '15'";
                                        $temp_str .= "'active' => '1'";
                                        break;
                                    case 93:
                                        $temp_str .= "'leaveid' => '" . $v . "' ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "'";
                                        $temp_str .= "'description' => '15'";
                                        $temp_str .= "'active' => '1'";
                                        break;
                                    default:
                                        $temp_str .= "'leaveid' => '" . $v . "'";
                                        $temp_str .= "'emplid' => '" . $value1->id . "'";
                                        $temp_str .= "'description' => ''";
                                        $temp_str .= "'active' => '1'";
                                        break;
                                }
                                $temp_str .= '],' . "\r\n";
                            }
                        } else {
                            if ($k == 'id') {
                                $temp_str .= '[';
                                switch ($v) {
                                    case 92:
                                        $temp_str .= "'leaveid' => '" . $v . "', ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "',";
                                        $temp_str .= "'description' => 'unlimited',";
                                        $temp_str .= "'active' => '1',";
                                        break;
                                    case 105:
                                        $temp_str .= "'leaveid' => '" . $v . "', ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "',";
                                        $temp_str .= "'description' => '5',";
                                        $temp_str .= "'active' => '1',";
                                        break;
                                    case 96:
                                        $temp_str .= "'leaveid' => '" . $v . "' ,";
                                        $temp_str .= "'emplid' => '" . $value1->id . "',";
                                        $temp_str .= "'description' => '15',";
                                        $temp_str .= "'active' => '1',";
                                        break;
                                    case 93:
                                        $temp_str .= "'leaveid' => '" . $v . "', ";
                                        $temp_str .= "'emplid' => '" . $value1->id . "',";
                                        $temp_str .= "'description' => '15',";
                                        $temp_str .= "'active' => '1',";
                                        break;
                                    default:
                                        $temp_str .= "'leaveid' => '" . $v . "',";
                                        $temp_str .= "'emplid' => '" . $value1->id . "',";
                                        $temp_str .= "'description' => null,";
                                        $temp_str .= "'active' => '1',";
                                        break;
                                }
                                $temp_str .= '],' . "\r\n";
                            }
                        }
                    }
                }
            }
            return $temp_str;
        }




        $temp_db = DB::table($request->id)->get();
        $temp_str = '';


        foreach ($temp_db  as $key1 => $value1) {
            $temp_str .= '[';
            $temp_num = 0;
            $temp_count = 0;
            foreach ($temp_db[$key1] as $key => $value) {
                $temp_count++;
            }

            foreach ($temp_db[$key1] as $key => $value) {
                $temp_num++;
                if ($temp_num == $temp_count) {
                    if ($key == 'id') {
                        $temp_str .= "'" . $key . "' => " . $value . "";
                    } else {
                        $temp_str .= "'" . $key . "' => '" . $value . "'";
                    }
                } else {
                    if ($key == 'id') {
                        $temp_str .= "'" . $key . "' => " . $value . ", ";
                    } else {
                        $temp_str .= "'" . $key . "' => '" . $value . "', ";
                    }
                }
            }
            $temp_str .= '],' . "\r\n";
        }

        return $temp_str;
    }
}
