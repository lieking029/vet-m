<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\Vet\MgtProducts;
use Illuminate\Http\Request;

class ProductsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function list(Request $request)
    {    
        $dt = MgtProducts::select("user_id", "id", "name", "category", "description", "remarks", "amount", "picture", "active"); 
        $dt_c = clone $dt;  


        switch ($request->category) {
            case 'All':
            case '':  break; 
            default:  
            $dt_c = $dt_c->where("category",$request->category) ;    break;
        }  
       $dt_c = $dt_c->where("name", "like","%".$request->search."%"); 

        return ['data'=> $dt_c->paginate(8, '*', 'page', $request->page)  ];

    }
    public function attachment(Request $request)
    {
    }



    public function save(Request $request)
    {
        $table =  MgtProducts::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except('id') + ['user_id' => auth()->user()->id]);
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
        $temp = [];
        $img = $request->file[0];
        $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
        $temp['imagename'] = $newfilename;
        $img->storeAs('public/files/vet/products/', $newfilename);
        return  $newfilename;
    }


    public function categoryList(){
        return MgtProducts::select("category")->where("active",1)->groupBy("category")->get();
    }



}
