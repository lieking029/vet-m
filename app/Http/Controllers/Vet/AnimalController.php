<?php

namespace App\Http\Controllers\Vet;
 
use App\Http\Controllers\Controller;
use App\Models\TblGenerals;
use App\Models\Vet\MgtAnimals;
use App\Models\Vet\MgtPets;
use Illuminate\Http\Request;

class AnimalController extends Controller
{   

    public function __construct()
    {
        $this->middleware('auth');
    }
    // pets 
    public function list(Request $request){
        $tbl = MgtPets::query(); 
        if($request->search){
            $tbl = $tbl->where("name",'like','%'.$request->search.'%')
            ->where("breed",'like','%'.$request->search.'%') 
            ->where("owner",'like','%'.$request->search.'%');
        }
 
        $return = [];
        foreach ( $tbl->where(["user_id"=>auth()->user()->id])->where('active',1)->get() as $key => $value) {
           $temp=[]; 
           $temp['id']= $value->id;
                 $temp['name']= $value->name;
                 $temp['birth_date']= $value->birth_date;
                 $temp['breed']= $value->breed;
                 $temp['gender']= $value->gender;
                 $temp['color']= $value->color;
                 $temp['picture']= $value->picture;
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
                 $temp['allergies']= json_decode($value->allergies);
                 $temp['veterinarians']= json_decode($value->veterinarians);
                 $temp['attachment']= json_decode($value->attachment);
                 $temp['remarks']= json_decode($value->remarks); 
                 $temp['active']= $value->active;
                array_push($return, $temp);
        } 
        return $return;
    }
    public function attachment(Request $request){
        $return = [];
        foreach ($request->file as $key => $value) {
            $temp = [];
            $img = $value;
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/vet/pets/attachment/', $newfilename);
            array_push($return, $temp);
        }
        return ['name' => $request->type, 'file' => $return];
    }
    public function save(Request $request){   
        $table =  MgtPets::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except(['attachment','allergies','veterinarians','remarks']) + ['updated_at' => date("Y-m-d h:i:s"),   'attachment' => json_encode($request->attachment),    'allergies' => json_encode($request->allergies), 'veterinarians' => json_encode($request->veterinarians), 'remarks' => json_encode($request->remarks), 'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except(['attachment','allergies','veterinarians','remarks','active']) + [  'attachment' => json_encode($request->attachment),   'allergies' => json_encode($request->allergies),   'veterinarians' => json_encode($request->veterinarians),  'remarks' => json_encode($request->remarks) , 'user_id' => auth()->user()->id]);
            $clone = clone $table;
            return $clone->orderBy("id", "desc")->first();
        }
    } 
    public function active(Request $request){ 
        return MgtPets::where("id",$request->id)->update(['active'=> $request->active]);
    } 
    public function picture(Request $request){
        $return = []; 
            $temp = [];
            $img = $request->file[0];
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/vet/pets/picture/', $newfilename); 
        return  $newfilename  ;
    }

    // animals
    public function animalList(Request $request){
        $tbl = MgtAnimals::query(); 
        if($request->search){
            $tbl = $tbl->where("name",'like','%'.$request->search.'%')
            ->where("description",'like','%'.$request->search.'%') 
            ->where("owner",'like','%'.$request->search.'%');
        }
 
        $return = [];
        foreach ( $tbl->where(["user_id"=>auth()->user()->id])->where('active',1)->get() as $key => $value) {
           $temp=[]; 
                $temp['id']= $value->id;
                $temp['name']= $value->name;
                $temp['farm_name']= $value->farm_name;
                 $temp['type'] = TblGenerals::where("id",$value->type)->first();
                 $temp['specific_type']= $value->specific_type;
                 $temp['date']= $value->date;
                 $temp['description']= $value->description;
                 $temp['location']= $value->location;
                 $temp['count']= $value->count; 
                 $temp['picture']= $value->picture;

                 $temp['owner']= $value->owner;
                 $temp['email']= $value->email;
                 $temp['address']= $value->address;
                 $temp['phone']= $value->phone;

                 $temp['veterinarians']= json_decode($value->veterinarians); 
                 $temp['attachment']= json_decode($value->attachment);
                 $temp['remarks'] = json_decode($value->remarks);

                 
                 $temp['active']= $value->active;
                array_push($return, $temp);
        } 
        return $return;
    }
    public function animalAttachment(Request $request){
        $return = [];
        foreach ($request->file as $key => $value) {
            $temp = [];
            $img = $value;
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/vet/animals/attachment/', $newfilename);
            array_push($return, $temp);
        }
        return ['name' => $request->type, 'file' => $return];
    }
    public function animalSave(Request $request){   
      
        $table =  MgtAnimals::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except(['type','attachment', 'veterinarians','remarks']) + [ 'type'=>$request->type['id'], 'attachment' => json_encode($request->attachment),     'veterinarians' => json_encode($request->veterinarians), 'remarks' => json_encode($request->remarks), 'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except([ 'attachment', 'veterinarians','remarks','active']) + [   'attachment' => json_encode($request->attachment),   'allergies' => json_encode($request->allergies),   'veterinarians' => json_encode($request->veterinarians),  'remarks' => json_encode($request->remarks) , 'user_id' => auth()->user()->id]);
            $clone = clone $table;
            return $clone->orderBy("id", "desc")->first();
        }
    } 
    public function animalActive(Request $request){ 
        return MgtAnimals::where("id",$request->id)->update(['active'=> $request->active]);
    } 
    public function animalPicture(Request $request){
        $return = []; 
            $temp = [];
            $img = $request->file[0];
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/vet/animals/picture/', $newfilename); 
        return  $newfilename  ;
    }
    public function animalDropdowns(){
        return TblGenerals::where("main",0)->where("description",'Animals')->get(); 
    } 
    // public function active(Request $request){
    //     return Subjects::where("id",$request->id)->update(['active'=> $request->active]);
    // }
}
