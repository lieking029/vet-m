<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\Exports\ExcelExport;
use App\Models\Vet\MgtAnimals;
use App\Models\Vet\MgtAppointments;
use App\Models\Vet\MgtPets;
use App\Models\Vet\MgtProducts;
use App\Models\Vet\MgtSales;
use App\Models\Vet\MgtServices;
use App\User;
use PDF;
use Excel;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function yearList()
    {
        return MgtSales::selectRaw("year(created_at)  as year ")->groupByRaw("created_at")->orderBy("created_at", "desc")->get();        
    }

    public function statusList()
    {
        return TblGenerals::where("group",1)->select("name","id")->get();        
    }

    public function report(Request $request){
      
        switch ($request->row) {
            case 'a': return self::a($request);  break;
            case 'b': return self::b($request);  break;
            case 'c': return self::c($request);  break; 
            case 'd': return self::d($request);  break; 
            case 'e': return self::e($request);  break; 
            default:  break;
        }

 
    }
    private static function a($params){
 
        //get the table
        $dt = MgtSales::query(); 
        //parameters
        if($params->year){ 
            $dt = $dt->whereRaw("year(created_at) = ".$params->year); 
        }  
        
    
        $data = []; 
        foreach ($dt->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];
            $temp['id'] = $value->transaction_code;
            $temp['product'] =  MgtProducts::where("id", $value->product_id)->first()->name;
            $temp['quantity'] = $value->quantity;
            $temp['amount'] =  number_format($value->amount,2);
            $temp['total_amount'] =   number_format($value->total_amount,2) ;
            $temp['user_id'] = User::where("id", $value->user_id)->first()->name;
            array_push($data, $temp);
        } 

 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['report_name'] = ($params->year? "Orders list for the year ".$params->year:'Order List'); 

            $pdf = PDF::loadView('reports.orders', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Product name',"Quantity","Amount per quantity", "Amount", "Order by"];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }
    private static function b($params){
 
        //get the table
        $dt = MgtPets::query(); 
        //parameters
        if($params->year){ 
            $dt = $dt->whereRaw("year(created_at) = ".$params->year); 
        }  
        
    
        $data = []; 
        foreach ($dt->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = []; 
                 $temp['name']= $value->name;
                 $temp['birth_date']= $value->birth_date;
                 $temp['breed']= $value->breed;
                 $temp['gender']= $value->gender;
                 $temp['color']= $value->color;
                 $temp['microchip']= $value->microchip;
                 $temp['weight']= $value->weight;
                 $temp['mother']= $value->mother;
                 $temp['mother_breed']= $value->mother_breed;
                 $temp['father']= $value->father;
                 $temp['father_breed']= $value->father_breed;
                 $temp['owner']= $value->owner;
                 $temp['phone']= $value->phone;
                 $temp['email']= $value->email;
                 $temp['address']= $value->address; 
                 $temp['active']= $value->active; 
              array_push($data, $temp);
        } 
 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['report_name'] = ($params->year? "Pets for the year ".$params->year:'Pets List'); 

            $pdf = PDF::loadView('reports.pets', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Name',"Birth Date","Breed", "Gender", "Color","Microchip",
            'Weight',"Mother", "Mother Breed", "Father", "Father Breed",
            'Owner',"Phone","Email","Address","Status"];
 
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }
    private static function c($params){
 
        //get the table
        $dt = MgtAnimals::query(); 
        //parameters
        if($params->year){ 
            $dt = $dt->whereRaw("year(created_at) = ".$params->year); 
        }  
        
    
        $data = []; 
        foreach ($dt->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];  
                $temp['farm_name']= $value->farm_name;
                $temp['name']= $value->name;
                $temp['type'] = TblGenerals::where("id",$value->type)->first()->name;
                $temp['specific_type']= $value->specific_type;
                $temp['date']= $value->date;
                $temp['description']= $value->description;
                $temp['location']= $value->location;
                $temp['count']= $value->count;

                $temp['owner']= $value->owner;
                $temp['email']= $value->email;
                $temp['address']= $value->address;
                $temp['phone']= $value->phone;
  
                
                $temp['active']= $value->active;
              array_push($data, $temp);
        } 
 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['report_name'] = ($params->year? "Animals list for year ".$params->year:'Animals List'); 

            $pdf = PDF::loadView('reports.animals', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Farm Name',"Name","Type", "Specific Type", "Date","Description",
            'Location',"Count", "Owner", "Email", "Address", "Phone","Status"];
 
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }
    private static function d($params){
 
        //get the table
        $dt = MgtAppointments::query(); 
        //parameters
        if($params->year){ 
            $dt = $dt->whereRaw("year(created_at) = ".$params->year); 
        }  
        
    
        $data = []; 
        foreach ($dt->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];  
            if($value->type == 1){
                $details = MgtPets::where("id", $value->ref_id)->first();  
            }else{
                $details = MgtAnimals::with("types")->where("id", $value->ref_id)->first(); 
            }
           
            $temp['name'] = $details->name;
            $temp['service'] = MgtServices::where("id", $value->service_id)->first()->name;
            $temp['remarks'] = $value->remarks;
            $temp['amount'] = $value->amount;
            $temp['owner'] = $details->owner;
            $temp['phone'] = $details->phone;
            $temp['dated'] = date("Y-m-d", strtotime($value->dated));
            $temp['status'] = TblGenerals::where("id",$value->status)->first()->name ;
       
        
         
              array_push($data, $temp);
        } 
 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['report_name'] = ($params->year? "Appointments list for year ".$params->year:'Appointments List'); 

            $pdf = PDF::loadView('reports.appointments', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ["Name","Service","Remarks / Description","Amount", "Owner","Phone","Dated","Status"];
 
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }
    private static function e($params){
 
        //get the table
        $dt = User::where("type","2"); 
        //parameters
        if($params->year){ 
            $dt = $dt->whereRaw("year(created_at) = ".$params->year); 
        }  
        
    
        $data = []; 
        foreach ($dt->orderBy("created_at", "desc")->get()  as $key => $value) {
           
           
            $temp['fullname'] = $value->fullname;
               $temp['contact_no'] = $value->contact_no;
            $temp['address'] = $value->address;
            $temp['birth_date'] = $value->birth_date;
            $temp['email'] = $value->email;
               $temp['active'] = $value->active == 1 ? 'Active': 'Inactive' ;
       
        
         
              array_push($data, $temp);
        } 
 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['report_name'] = ($params->year? "Clients list for year ".$params->year:'Clients List'); 

            $pdf = PDF::loadView('reports.clients', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ["Fullname","Phone #", "Address", "Birth date", "Email", "Status"];
 
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

}
