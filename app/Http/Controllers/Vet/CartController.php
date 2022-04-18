<?php

namespace App\Http\Controllers\Vet;

use App\Http\Controllers\Controller;
use App\Models\Vet\MgtCart;
use App\Models\Vet\MgtProducts;
use App\Models\Vet\MgtSales;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function list(Request $request)
    {
        $return = [];
        foreach (MgtCart::where("active", 1)->where("user_id", auth()->user()->id)->orderBy("created_at", "desc")->get()  as $key => $value) {
            $data = MgtProducts::where("id", $value->product_id)->first();
            $temp = [];
            $temp['id'] = $value->id;
            $temp['product_id'] = $data->id;
            $temp['name'] = $data->name;
            $temp['picture'] = $data->picture;
            $temp['description'] = $data->description;
            $temp['quantity'] = $value->quantity;
            $temp['amount'] = $value->total_amount;
            array_push($return, $temp);
        }

        return [
            'count' => MgtCart::where("active", 1)->where("user_id", auth()->user()->id)->count(),
            'amount' => MgtCart::where("active", 1)->where("user_id", auth()->user()->id)->sum("total_amount"),
            "data" => $return
        ];
    }




    public function attachment(Request $request)
    {
    }
    public function save(Request $request)
    {
        $table =  MgtCart::query();
        $clone = clone $table;
        if ($clone->where("active", 1)->where("product_id", $request->product_id)->get()->count() > 0) {
            $clone = clone $table;
            $quantity =  $clone->where("active", 1)->where("product_id", $request->product_id)->first()->quantity + $request->quantity;
            $amount =   $clone->where("active", 1)->where("product_id", $request->product_id)->first()->total_amount * $quantity;
            $clone = clone $table;
            $clone->where("product_id", $request->product_id)->update(['quantity' => $quantity, 'amount' => $amount]);
        } else {
            $clone = clone $table;
            $clone->create([
                'product_id' => $request->product_id,
                'quantity' => $request->quantity,
                'amount' => $request->amount / $request->quantity,
                'total_amount' => $request->amount,
                'user_id' => auth()->user()->id
            ]);
        }
        return $request->all();
    }

    public function delete(Request $request)
    {
        $table =  MgtCart::query();
        $clone = clone $table; 
        $clone->where("id", $request->id)->update(['active' => 0]);
        return $request->all();
    }


    public function itemChange(Request $request)
    {     
        $table =  MgtCart::query();
        $amount = 0;
        $clone = clone $table;  
        $amount = ($clone->where("active",1)->where("id", $request->id)->first()->amount * $request->quantity); 
        $clone = clone $table;
        $clone->where("product_id", $request->product_id)->update(['quantity' =>  $request->quantity, 'total_amount' => $amount]);
        return $request->all();
    }

    public function checkout()
    { 
        $table =  MgtCart::where("user_id",auth()->user()->id);
        $clone = clone $table; 
        $tr_code = date("Y").".".date("m").".".$clone->count();

        $clone = clone $table; 
        foreach ($table->where("active",1)->get()  as $key => $value) {
            MgtSales::create(['product_id' =>$value->product_id ,
            'quantity'=>$value->quantity,
            'amount'=> $value->amount,
            'total_amount'=> $value->total_amount,
            'transaction_code'=> $tr_code,
            'user_id'=> auth()->user()->id]);
        } 
        $clone = clone $table; 
        return  $clone->delete(); 
    }




    public function removeAll(Request $request)
    {   
        $table =  MgtCart::where("user_id",auth()->user()->id);    
        $clone = clone $table; 
        return  $clone->delete(); 
    }
}
