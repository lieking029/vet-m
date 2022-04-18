<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\Vet\MgtStocks;
use Illuminate\Http\Request;

class StocksController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    } 

    public function list(Request $request){
        return MgtStocks::select("name","description","amount","handled_by","picture")->
        paginate(10, '*', 'page', $request->page); 
    }
    public function attachment(Request $request){
    }
    public function save(Request $request){
 
        $table =  MgtStocks::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except('id' ) + ['updated_at' => date("Y-m-d h:i:s A"),    'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except('id') + [       'user_id' => auth()->user()->id]);
            $clone = clone $table;
            return $clone->orderBy("id", "desc")->first();
        }
    }
    public function picture(Request $request){
        $return = []; 
        $temp = [];
        $img = $request->file[0];
        $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
        $temp['imagename'] = $newfilename;
        $img->storeAs('public/files/vet/services/', $newfilename); 
        return  $newfilename  ;
    }
}
