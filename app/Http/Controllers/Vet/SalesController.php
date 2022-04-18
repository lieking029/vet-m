<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\Vet\MgtProducts;
use App\Models\Vet\MgtSales;
use App\User;
use Illuminate\Http\Request;

class SalesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function list(Request $request)
    {

        $return = [];

        $tbl = MgtSales::select(["created_at", "transaction_code", "user_id"])->where("active", 1);

        if($request->search){
            $tbl->where("transaction_code","like","%".$request->search."%");
        }

        foreach ($tbl
            ->where("user_id", auth()->user()->id)->groupBy(["created_at", "transaction_code", "user_id"])
            ->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];
            $temp['id'] = $value->transaction_code;
            $temp['created_at'] = date("Y-m-d", strtotime($value->created_at));
            $temp['transaction_code'] = $value->transaction_code;
            $temp['amount'] = "Php " . number_format(MgtSales::where("transaction_code", $value->transaction_code)->sum("total_amount"), 2);
            $temp['user_id'] = User::where("id", $value->user_id)->first();
            array_push($return, $temp);
        }
        return $return;
    }


    public function detailsList(Request $request)
    {

        $return = [];
        foreach (MgtSales::where("transaction_code", $request->id)->orderBy("created_at", "desc")->get()  as $key => $value) {
            $temp = [];
            $temp['id'] = $value->transaction_code;
            $temp['product'] =  MgtProducts::where("id", $value->product_id)->first();
            $temp['quantity'] = $value->quantity;
            $temp['amount'] = "Php " . number_format($value->amount, 2);
            $temp['total_amount'] = "Php " . number_format($value->total_amount, 2);
            array_push($return, $temp);
        } 

        return ['data' => $return, 'total' => 'Php '. number_format(MgtSales::where("transaction_code", $request->id)->sum("total_amount"),2) ]  ;
    }
}
