<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\Models\Vet\MgtAnimals;
use App\Models\Vet\MgtAppointments;
use App\Models\Vet\MgtPets;
use App\Models\Vet\MgtSales;
use App\Models\Vet\MgtServices;
use Illuminate\Http\Request;

class MainController extends Controller
{ 
    public function __construct()
    {
        $this->middleware('auth');
    } 
    public function appointmentList(Request $request){
      $return = [];
      foreach (MgtAppointments::where("active", 1)->where("user_id", auth()->user()->id)->orderBy("created_at", "desc")->get()  as $key => $value) {
          $temp = [];
          $temp['id'] = $value->id; 
          if($value->type == 2){
            $temp['pet'] = MgtAnimals::where("id", $value->pet_id)->first(); 
          }else{
            $temp['pet'] = MgtPets::select(["name","picture"])->where("id", $value->pet_id)->first(); 
          } 
          $temp['service'] = MgtServices::select("name")->where("id", $value->service_id)->first()->name;
          $temp['amount'] = $value->amount;
          $temp['status'] = TblGenerals::where("id",$value->status)->first()->name;
          $temp['remarks'] = $value->remarks;   
          $temp['dated'] = date("Y-m-d",strtotime($value->dated));   
          array_push($return, $temp);
      } 
      return $return; 
    }

    public function summaryCount(Request $request){
        $temp = [];
        $temp['pets'] = MgtPets::where(['user_id'=>Auth()->user()->id,"active"=>'1'])->count();
        $temp['animals'] = MgtAnimals::where(['user_id'=>Auth()->user()->id,"active"=>'1'])->count();
        $temp['appointments'] = MgtAppointments::where(['user_id'=>Auth()->user()->id,"active"=>'1'])->count();
        // $temp['orders'] = MgtSales::where(['user_id'=>Auth()->user()->id,"active"=>'1'])->count();
        return $temp;
    }


    public function attachment(Request $request){
    }
    public function save(Request $request){
    }
    public function picture(Request $request){
    }
}
