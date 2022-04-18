<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Models\TblStudents;
use App\Exports\ExcelExport;
use App\Models\TblAnnouncements;
use App\Models\TblGenerals;
use App\Models\TblLosts;
use App\Models\TblSanctions;
use App\User;
use Illuminate\Http\Request; 
use PDF;
use Excel;
use Spatie\Permission\Models\Role;

class ReportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function data(Request $request){
       
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
        $student = TblStudents::where('first_name','!=', null); 
        //parameters
        if($params->year){ 
            $student = $student->where("year",$params->year); 
        } 
        if($params->course){
            $student = $student->where("course",$params->course); 
        } 
        if($params->status){
            $student = $student->where("status",$params->status); 
        } 
 

        if($params->active != null){
            $student = $student->where("active",$params->active); 
        } 
        //designate columns
        $data = [];
        
        foreach ($student->get()  as $key => $value) {
            $temp=[];
            $temp['full_name'] = $value->full_name;
            $temp['email'] = $value->email;
            $temp['contact'] = $value->contact;
            $temp['address'] = $value->address;
            $temp['gender'] = $value->gender;
            $temp['birth_date'] = date("Y-m-d", strtotime($value->birth_date));
            $temp['birth_place'] = $value->birth_place;
            $temp['created_by'] = User::where("id",$value->created_by)->first()->first_name; 
            array_push($data , $temp);
        }
 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['course'] =   
            ($params->year == $params->course? 'All':  
            ($params->course? TblGenerals::where("id",$params->course)->first()->name:'All') . ' / '. 
            ($params->year? TblGenerals::where("id",$params->year)->first()->name: 'All')); 


            $pdf = PDF::loadView('reports.students_list', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Student Name', 'Email', 'Contact #', 'Address', 'Gender', 'Birth date', 'Birth place','Process By'];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

    private static function b($params){
 
        //get the table
         $sactions = TblSanctions::with('student')->where('type','!=', null); 
        //parameters
        if($params->year){ 
            $sactions =  $sactions->whereHas('student', function ($q) use ($params) {
                $q->where('year',   $params->year  );
            });
        } 
        if($params->course){
            $sactions =$sactions->whereHas('student', function ($q) use ($params) {
                $q->where('course',   $params->course  );
            });
        } 
        if($params->status){
            $sactions =$sactions->whereHas('student', function ($q) use ($params) {
                $q->where('status',   $params->status  );
            });
        } 

 
        if($params->active != null){
            $sactions = $sactions->where("active",$params->active); 
        }  

        //designate columns
        $data = [];
     
        foreach ($sactions->get() as $key => $value) {
            $temp=[]; 
            $temp['full_name'] = $value->full_name;  
            $temp['type_name'] = TblGenerals::where("id",$value->type)->first()->name; 
            $temp['details'] = $value->details;
            $temp['dated'] = date("Y-m-d", strtotime($value->dated)); 
            $temp['created_by'] = User::where("id",$value->created_by)->first()->first_name;  
            array_push($data, $temp);  
        } 
        if($params->type == 'pdf'){
          
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['course'] =   
            ($params->year == $params->course? 'All':  
            ($params->course? TblGenerals::where("id",$params->course)->first()->name:'All') . ' / '. 
            ($params->year? TblGenerals::where("id",$params->year)->first()->name: 'All')); 
            $pdf = PDF::loadView('reports.sanction_list', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Student Name', 'Saction','Dated', 'Details', 'Process by'];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

    private static function c($params){
 
        //get the table
        $lostid = TblLosts::where('student_id','!=', null); 
        //parameters
        if($params->year){ 
            $lostid =  $lostid->whereHas('student', function ($q) use ($params) {
                $q->where('year',   $params->year  );
            });
        } 
        if($params->course){
            $lostid =$lostid->whereHas('student', function ($q) use ($params) {
                $q->where('course',   $params->course  );
            });
        } 
        if($params->status){
            $lostid =$lostid->whereHas('student', function ($q) use ($params) {
                $q->where('status',   $params->status  );
            });
        }  
 
        if($params->active != null){
            $lostid = $lostid->where("active",$params->active); 
        } 
        //designate columns
        $data = [];
     
        foreach ($lostid->get() as $key => $value) {
            $temp=[]; 
            $temp['dated'] = date("Y-m-d",strtotime($value->dated));
            $temp['full_name'] = $value->full_name;  
            $temp['series'] = $value->series;
            $temp['remarks'] = $value->remarks;  
            $temp['created_by'] = User::where("id",$value->created_by)->first()->first_name; 
            array_push($data, $temp);  
        } 
        if($params->type == 'pdf'){ 
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;  
            $content['course'] =   
            ($params->year == $params->course? 'All':  
            ($params->course? TblGenerals::where("id",$params->course)->first()->name:'All') . ' / '. 
            ($params->year? TblGenerals::where("id",$params->year)->first()->name: 'All')); 
            $pdf = PDF::loadView('reports.lostid_list', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Lost Date', 'Student Name', 'Series','Reason', 'Process By'];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

    private static function d($params){
 
        //get the table
        $users = User::where('first_name','!=', null); 
        //parameters
       
        if($params->active != null){
            $users = $users->where("active",$params->active); 
        } 
        //designate columns
        $data = [];
     
        foreach ($users->get() as $key => $value) {
            $temp=[]; 
            $temp['user_type'] =  Role::where("id", $value->user_type)->first()->name; 
            $temp['full_name'] = $value->last_name . ', '. $value->first_name . ($value->middle_name? ' '. $value->middle_name:'');  
            $temp['nick_name'] =  $value->nick_name;
            $temp['email'] = $value->email;  
            $temp['contact'] = $value->contact;  
            array_push($data, $temp);  
        } 
        if($params->type == 'pdf'){ 
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;   
            $pdf = PDF::loadView('reports.users_list', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['User Type','Name', 'Nick name', 'Email', 'Contact #'];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

    private static function e($params){
 
        //get the table
        $users = TblAnnouncements::where('title','!=', null); 
        //parameters
       
        if($params->active != null){
            $users = $users->where("active",$params->active); 
        } 
        //designate columns
        $data = [];
     
        foreach ($users->get() as $key => $value) {
            $temp=[]; 
            $temp['created_at'] = date("Y-m-d",strtotime($value->created_at));
            $temp['created_by'] = User::where("id",$value->created_by)->first()->first_name;
            $temp['dated'] = date("Y-m-d",strtotime($value->dated));
            $temp['title'] = $value->title;
            $temp['description'] =  $value->description;  
            array_push($data, $temp);  
        } 
        if($params->type == 'pdf'){ 
            $content = [];
            $content['data'] = $data; 
            $content['process_by'] = User::where("id",auth()->user()->id)->first()->first_name ;   
            $pdf = PDF::loadView('reports.announcement_list', $content, [], [
                'format' => 'A4-L',
            ]);
            return $pdf->stream();  
        }else{
            $columns = ['Created at','Created by', 'Announcement Date', 'Title', 'Description'];
            //Data  
            return Excel::download(new ExcelExport($data, $columns), "data.xls");
        }



    }

}
