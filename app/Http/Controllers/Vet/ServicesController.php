<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\Vet\MgtServices;
use Illuminate\Http\Request;

class ServicesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function list(Request $request)
    {


        $dt = MgtServices::select("id", "name", "description", "amount", "handled_by", "picture"); 
        $dt_c = clone $dt; 
        
        switch ($request->search ) {
            case 'All':
            case '': 
                break; 
            default:     $dt_c = $dt_c->where("name",$request->search); break;
        } 


        return ['data'=> $dt_c->paginate(6, '*', 'page', $request->page),"services" => $dt->get() ];
    }
    public function attachment(Request $request)
    {
    }
    public function save(Request $request)
    {

        $table =  MgtServices::query();
        if ($request->id) {
            $table->where("id", $request->id)->update($request->except('id') + ['user_id' => auth()->user()->id]);
            return $request->all();
        } else {
            $clone = clone $table;
            $clone->create($request->except('id') + ['user_id' => auth()->user()->id]);
            $clone = clone $table;
            return $clone->orderBy("id", "desc")->first();
        }
    }
    public function picture(Request $request)
    {
        $return = [];
        $temp = [];
        $img = $request->file[0];
        $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
        $temp['imagename'] = $newfilename;
        $img->storeAs('public/files/vet/services/', $newfilename);
        return  $newfilename;
    }
}
