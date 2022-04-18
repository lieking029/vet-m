<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\Models\Vet\MgtAnimals;
use App\Models\Vet\MgtAppointments;
use App\Models\Vet\MgtPets;
use App\Models\Vet\MgtServices;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function list(Request $request)
    {

        $return = []; 
        
        foreach (MgtAppointments::where("active", 1)->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];
            if($value->type == 1){
                $details = MgtPets::where("id", $value->ref_id)->first();  
            }else{
                $details = MgtAnimals::with("types")->where("id", $value->ref_id)->first(); 
            }
          
          
            $temp['id'] = $value->id;
            $temp['type'] = $value->type;
            $temp['details'] = $details;
            $temp['service'] = MgtServices::where("id", $value->service_id)->first();
            $temp['amount'] = $value->amount;
            $temp['status'] = TblGenerals::where("id",$value->status)->first() ;
            $temp['remarks'] = $value->remarks;
            $temp['dated'] = date("Y-m-d", strtotime($value->dated));
            $temp['owner'] = $details->owner;
        
         
          
            array_push($return, $temp);
        }
        return $return;
    }
    public function save(Request $request)
    {
        $table =  MgtAppointments::query();
        if ($request->id) {
            $table->where("id", $request->id)->update(
                [
                    "type" => $request->types,
                    "ref_id" => $request->pet_id['id'],
                    "service_id" => $request->service_id,
                    "amount" => (float)$request->amount,
                    "dated" => $request->dated,
                    "remarks" => $request->remarks,
                    "status" => 2,
                    'user_id' => auth()->user()->id
                ]
            );
            return $request->all();
        } else {
            $clone = clone $table;
            $clone->create($request->except('id', 'ref_id',"type") + ["status" => 2, "type"=>$request->types, "ref_id" => $request->pet_id['id'], 'user_id' => auth()->user()->id]);
            $clone = clone $table;
            return $clone->orderBy("id", "desc")->first();
        }
    }
    public function  animalList()
    {
            return MgtAnimals::where(["active"=> 1,"user_id"=>auth()->user()->id])->get();
       
 
        // $return = [];
        // foreach ( $tbl->where(["user_id"=>auth()->user()->id])->where('active',1)->get() as $key => $value) {
        //    $temp=[]; 
        //    $temp['id']= $value->id;
        //          $temp['farm_name']= $value->farm_name;
        //          $temp['name'] = $value->name;
        //          $temp['type'] = TblGenerals::where("id",$value->type)->first()->name;
        //          $temp['specific_type']= $value->specific_type;
        //          $temp['date']= $value->date;
        //          $temp['description']= $value->description;
        //          $temp['location']= $value->location;
        //          $temp['count']= $value->count;

        //          $temp['owner']= $value->owner;
        //          $temp['email']= $value->email;
        //          $temp['address']= $value->address;
        //          $temp['phone']= $value->phone;

        //          $temp['veterinarians']= json_decode($value->veterinarians); 
        //          $temp['attachment']= json_decode($value->attachment);
        //          $temp['remarks'] = json_decode($value->remarks);

                 
        //          $temp['active']= $value->active;
        //         array_push($return, $temp);
        // } 
        // return $return;
    }
    public function  petList()
    {
        return MgtPets::where(["active"=> 1,"user_id"=>auth()->user()->id])->get();
    }

    public function  serviceList()
    {
        return MgtServices::where("active", 1)->get();
    }

    public function  statusList()
    {
        return TblGenerals::where(["active"=>1, "main" => 0])->get();
    }


    public function cancel(Request $request)
    {
        return   MgtAppointments::where("id", $request->id)->update(
            ['active' => 0]
        );
    }

    public function statusChange(Request $request)
    {
        return   MgtAppointments::where("id", $request->id)->update(
            ['status' => $request->status]
        );
    }
}
