<?php

namespace App\Http\Controllers\Info;

use App\Exports\ExcelExport;
use App\Http\Controllers\Controller;
use App\Models\Info\MainInfo;
use App\Models\TblGenerals;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use PDF;
use Excel;
use Illuminate\Database\Eloquent\Collection;

class MainController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }


    //list of items
    public function list(Request $request)
    {

        $data = MainInfo::select("id", "reference", 'active', "program", "title", "date", "coordinator", "budget", "status", "agency")
            ->with("programs", "statuses")
            ->where("active", $request->active);

        if ($request->banner) {
            $data = $data->whereIn("program", $request->banner);
        }

        if ($request->search) {
            $data = $data
                ->where("agency", 'like', '%' . $request->search . '%')
                ->orwhere("coordinator", 'like', '%' . $request->search . '%')
                ->orwhere("title", 'like', '%' . $request->search . '%');
        }

        return $data->paginate(10, '*', 'page', $request->page);
    }
    //uploading of images
    public function attachment(Request $request)
    {
        $return = [];
        foreach ($request->file as $key => $value) {
            $temp = [];
            $img = $value;
            $newfilename = $img->getClientOriginalName() . "~" . time() . '.' . $img->getClientOriginalExtension();
            $temp['imagename'] = $newfilename;
            $img->storeAs('public/files/info', $newfilename);
            array_push($return, $temp);
        }
        return ['name' => $request->type, 'file' => $return];
    }

    //generate reference 
    public function reference()
    {
        try {
            $ref = MainInfo::select("reference")->whereYear("created_at", date("Y"))->orderBy("reference", "desc")->first()->reference;
            return date("Y") . '-' . date("m") . '-' . substr("00000".(explode("-", $ref)[2] + 1),-5,5) ;
        } catch (\Throwable $th) {
            return  date("Y") . '-' . date("m") . '-' .  "00001";
        }
    }

    //saving or updating items
    public function save(Request $request)
    { 
        $ref = self::reference();
        $table =  MainInfo::query();
        if ($request->id) {
            return $table->where("id", $request->id)->update($request->except(['created_at', 'hashed_id', 'budget_format', 'attachment',"attachment_type", 'reference', 'date', 'id', 'updated_at','multifield_name','multifield_value']) + ['updated_at' => date("Y-m-d h:i:s"), 'date' => date("Y-m-d h:i:s", strtotime($request->date)), 'attachment_type' => json_encode($request->attachment_type), 'attachment' => json_encode($request->attachment),  'multifield_name' => json_encode($request->multifield_name),  'multifield_value' => json_encode($request->multifield_value), 'user_id' => auth()->user()->id]);
        } else {
            $clone = clone $table;
            $clone->create($request->except(['created_at', 'reference', 'date', 'attachment', 'attachment_type','multifield_name','multifield_value']) + ['reference' => $ref, 'date' => date("Y-m-d h:i:s", strtotime($request->date)), 'attachment_type' => json_encode($request->attachment_type), 'attachment' => json_encode($request->attachment),  'multifield_name' => json_encode($request->multifield_name),  'multifield_value' => json_encode($request->multifield_value), 'user_id' => auth()->user()->id]);
            return $table->orderBy("id", "desc")->first();
        }
    }

    //listing
    public function dropdowns()
    {
        $data = [];
        $data['quarter'] = TblGenerals::where("description", 'Info-Quarter')->get();
        $data['status'] = TblGenerals::where("description", 'Info-Status')->get();
        $data['attachment'] = TblGenerals::where("description", 'Info-Attachment')->get();
        $data['banner'] = TblGenerals::where("description", 'Info-Banner')->get();
        $data['project'] = TblGenerals::where("description", 'Info-Project')->get();
        $data['r4d'] = TblGenerals::where("description", 'Info-R4D')->get();
        return $data;
    }

    //data
    public function get(Request $request)
    {
        $data = Crypt::decryptString($request->p);
        return MainInfo::where("id", $data)->first();
    }

    public function delete(Request $request)
    {
        if (MainInfo::where("id", $request->id)->first()->active == 1) {
            return MainInfo::where("id", $request->id)->update(['active' => 0]);
        } else {
            return MainInfo::where("id", $request->id)->update(['active' => 1]);
        }
    }




    // reportings


    //report listing
    public function reportdropdowns()
    {
        $data = [];
        $data['quarter'] = TblGenerals::where("description", 'Info-Quarter')->get();
        $data['banner'] = TblGenerals::where("description", 'Info-Banner')->get();
        $data['year'] = MainInfo::select("year")->groupBy("year")->get();
        $data['agency'] = MainInfo::select("agency")->groupBy("agency")->get();
        return $data;
    }

    public function reportlist(Request $request)
    { 
         $data = MainInfo::with('programs', 'statuses')->where("active", 1);

        if ($request->banner) {
            $data = $data->where("program", $request->banner);
        }

        if ($request->year) {
            $data = $data->whereIn("year", $request->year);
        }
        if ($request->quarter) {
            $data = $data->whereIn("quarter", $request->quarter);
        }
        if ($request->agency) {
            $data = $data->whereIn("agency", $request->agency);
        }
        $dt = clone $data;
        $dt = $dt->get();
        $return = [];
        foreach ($dt as $key => $value) {
            $temp = [];
            $temp['title'] = $value->title;
            $temp['agency'] = $value->agency;
            $temp['duration'] = $value->duration;
            $temp['amount'] = number_format($value->budget, 2);
            $temp['status'] = $value->statuses['name'];
            array_push($return, $temp);
        }

        if ($request->export) {
            $content = [];
            if ($request->export == 'pdf') {
                $content['process_by'] = auth()->user()->fullname;
                $content['report_name'] = $request->title;
                $content['data'] = $return; 
                $pdf = Pdf::loadView('reports.information_list', $content, [], [

                    'format' => 'A4-L',
                ]);
                return $pdf->stream();
            } else { 

                $columns = [
                    'Date',
                    'Reference No',
                    'Program Banner',
                    'Title',
                    'Agency',
                    'Received Project',
                    'General Objectives',
                    'Specific Objectives',
                    'Brief Description',
                    'Expected Output',
                    'Project Sites',
                    'Type of R4D',
                    'RDE Agenda',
                    'Budget',
                    'Status',
                    'Findings',
                    'Quarter',
                    'Duration',
                    'Year',
                    'Coordinator',
                    'Added Field', 
                    'User ID',
                    'Created At',
                ];

              
               

                $dt = clone $data;
                $return = [];

                foreach ($dt->with('projects','r4ds')->get()  as $key => $value) {
                    $vals =  '';
                    foreach ( json_decode($value->multifield_name) as $ky => $vl) {
                        $vals .=  $vl .': '. str_replace("\n",'',json_decode($value->multifield_value)[$ky])."\n";
                    }
                   

                    $temp = [];
                    foreach (json_decode($value) as $key1 => $value1) {
                        switch ($key1) {
                            case 'hashed_id':
                                case 'budget_format':
                            case 'id':
                            case 'programs':
                            case 'projects':
                            case 'statuses':
                            case 'r4ds':
                            case 'active':
                            case 'attachment':
                            case 'attachment_type': 
                            case 'multifield_value':
                            case 'updated_at':
                            break;
                            
                            case 'multifield_name': 
                            


                                $temp[$key1] = $vals; 



                                break;
                                case 'program':
                                    $temp[$key1] =  $value->programs['name']; 
                                break;
                                case 'project':
                                    $temp[$key1] =  $value->projects['name']; 
                                break;   
                                case 'type_r4d':
                                    $temp[$key1] =  $value->r4ds['name']; 
                                break;
                                case 'status':
                                    $temp[$key1] =  $value->statuses['name']; 
                                break;
                            default:
                                $temp[$key1] =  $value->$key1;
                                break;
                        }
                    }
                    array_push($return, $temp);
                }

                return Excel::download(new ExcelExport($return, $columns),  "data.xls");
            }
        } else { 
            return $return;
        }
    }

    //dashboards

    public function getCounts(Request $request)
    {
        $temp = [];
        $temp['agencies'] = MainInfo::distinct("agency")->where(['active' => 1])->count();
        $temp['year'] = MainInfo::select("year")->where(['active' => 1])->where("year", date("Y"))->groupBy('year')->count();

        return $temp;
    }

    public function getRecenlyAdded(Request $return){
        return MainInfo::select("title","program","status","budget","user_id","created_at")->with("programs","users","statuses")->orderBy("created_at","asc")->get()->take(10);
    }

    public function getProgramAgency(Request $return){
        $return = [];
        $get_course = TblGenerals::where("description", 'Info-Banner')->get();
        foreach (MainInfo::distinct("agency")->where(['active' => 1])->get() as $key => $value) {
            $temp = [];
            $temp['agency'] = $value->agency;
            foreach ($get_course as $k => $v) {
                $temp[$v->name] = MainInfo::where("agency",$value->agency)->where(['program' => $v->id])->count();
            }
            array_push($return,$temp);
        }
        return $return;
    }



    public function getDiagram1(Request $request)
    { return [];
        $get_course = TblGenerals::where("description", 'Info-Banner')->get();
        $data = [];
        $legend = [];
        $diagram = [];
        foreach ($get_course as $key => $value) {
            array_push($legend, $value->name);
            array_push($data, MainInfo::where(["active" => 1, 'program' => $value->id])->get()->count());
        }
        array_push($diagram, ['legend' => $legend, 'data' => $data]); //1st diagram 
        return $diagram;
    }
    public function getDiagram2(Request $request)
    {  
 
        $get_course = TblGenerals::where("description", 'Info-Quarter')->get();
        $data = [];
        $legend = [];
        $diagram = [];
        foreach ($get_course as $key => $value) {
            array_push($legend, $value->name);
            try {
                array_push($data, MainInfo::wherein("year",$request->year)->where(["active" => 1, 'quarter' => $value->name])->get()->count());
            } catch (\Throwable $th) {
                array_push($data, 0);
  
            }
           }
        array_push($diagram, ['legend' => $legend, 'data' => $data]); //1st diagram 
        return $diagram;
    }
    public function getStatus(Request $request)
    {  
        $get_course = TblGenerals::where("description", 'Info-Status')->get();
        $data = [];
        $legend = [];
        $diagram = [];
        foreach ($get_course as $key => $value) {
            array_push($legend, $value->name);
            array_push($data, MainInfo::where(["active" => 1, 'status' => $value->id])->get()->count());
        }
        array_push($diagram, ['legend' => $legend, 'data' => $data]); //1st diagram 
        return $diagram;
    }

    public function getBar1(Request $request)
    { 
        $get_course = TblGenerals::where("description", 'Info-Banner')->get();
        $data = [];
        $legend = [];
        $diagram = [];
        foreach ($get_course as $key => $value) {
            array_push($legend, $value->name);
            array_push($data, MainInfo::where(["active" => 1, 'program' => $value->id])->get()->count());
        }
        array_push($diagram, ['legend' => $legend, 'data' => $data]); //1st diagram 
        return $diagram;
    }
}
