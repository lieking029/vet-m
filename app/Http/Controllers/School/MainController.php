<?php

namespace App\Http\Controllers\School;

use App\Classes;
use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\Subjects;
use Illuminate\Http\Request; 

class MainController extends Controller
{
    // subject

    public function getSubjectList(Request $request){

        $return = [];
        foreach (Subjects::get() as $key => $value) {
           $temp=[]; 
           $temp['year'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->get();
           $temp['course'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->get();
           $temp['year_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->pluck('id');
           $temp['course_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->pluck('id');
           $temp['name']= $value->name;
           $temp['description']= $value->description;
           $temp['unit']= $value->unit;
           $temp['active']=  $value->active;
           $temp['attachment']= json_decode($value->attachment);
           $temp['id']= $value->id;
           array_push($return, $temp);
        } 
        return $return;
    }
    public function attachmentSubject(Request $request){
        $return = [];
        foreach ($request->file as $key => $value) {
            $temp = [];
            $img = $value;
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/school', $newfilename);
            array_push($return, $temp);
        }
        return ['name' => $request->type, 'file' => $return];
    }
    public function saveSubject(Request $request){  
        $table =  Subjects::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except(['attachment','course','year','year_id','course_id']) + ['updated_at' => date("Y-m-d h:i:s"),   'attachment' => json_encode($request->attachment),    'year' => json_encode($request->year), 'course' => json_encode($request->course), 'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except(['attachment','course','year','year_id','course_id']) + [  'attachment' => json_encode($request->attachment),   'year' => json_encode($request->year),   'course' => json_encode($request->course), 'user_id' => auth()->user()->id]);
            return $table->orderBy("id", "desc")->first();
        }
    }
    public function dropdownsSubject(){
        $list = [];
        $list['course'] = TblGenerals::where("main",0)->where("description",'Course')->get();
        $list['year'] = TblGenerals::where("main",0)->where("description",'Year')->get(); 
        return $list;
    } 
    public function activeSubject(Request $request){
        return Subjects::where("id",$request->id)->update(['active'=> $request->active]);
    }


    public function getClassList(Request $request){

        $return = [];
        foreach (Classes::get() as $key => $value) {
           $temp=[]; 
           $temp['year'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->get();
           $temp['course'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->get();
           $temp['year_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->pluck('id');
           $temp['course_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->pluck('id'); 
           $temp['name']= $value->name;
           $temp['description']= $value->description;
           $temp['location']= $value->location; 
           $temp['active']=  $value->active; 
           $temp['id']= $value->id;
           array_push($return, $temp);
        } 
        return $return;
    }
    public function attachmentClass(Request $request){
        $return = [];
        foreach ($request->file as $key => $value) {
            $temp = [];
            $img = $value;
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/school', $newfilename);
            array_push($return, $temp);
        }
        return ['name' => $request->type, 'file' => $return];
    }
    public function saveClass(Request $request){  
        $table =  Classes::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except(['attachment','course','year','year_id','course_id']) + ['updated_at' => date("Y-m-d h:i:s"),      'year' => json_encode($request->year), 'course' => json_encode($request->course), 'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except(['attachment','course','year','year_id','course_id']) + [    'year' => json_encode($request->year),   'course' => json_encode($request->course), 'user_id' => auth()->user()->id]);
            return $table->orderBy("id", "desc")->first();
        }
    }
    public function dropdownsClass(){
        $list = [];
        $list['course'] = TblGenerals::where("main",0)->where("description",'Course')->get();
        $list['year'] = TblGenerals::where("main",0)->where("description",'Year')->get(); 
        return $list;
    } 
    public function activeClass(Request $request){
        return Subjects::where("id",$request->id)->update(['active'=> $request->active]);
    }



    public function getDashboardCourse(Request $request){

        $return = [];
        foreach (Classes::get() as $key => $value) {
           $temp=[]; 
           $temp['year'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->get();
           $temp['course'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->get();
           $temp['year_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->year))->pluck('id');
           $temp['course_id'] = TblGenerals::select("name","id")->wherein("id",json_decode($value->course))->pluck('id'); 
           $temp['name']= $value->name;
           $temp['description']= $value->description;
           $temp['location']= $value->location; 
           $temp['active']=  $value->active; 
           $temp['id']= $value->id;
           array_push($return, $temp);
        } 
        return $return;
    }



}
