<?php

namespace App\Http\Controllers;

use App\Models\brief;
use Illuminate\Http\Request;

class BriefController extends Controller
{
    public function get_all(){
        $data = brief::all();
        return response()->json($data);
    }

    public function get($id_br){
        $data = brief::where('id_br', $id_br)->first();
        return response()->json($data);
    }

    public function get_with_tasks($id_br){
        $data = brief::where('id_br', $id_br)->first();
        $data->tasks;
        return response()->json($data);
    }

    public function get_with_stu($id_br){
        $data = brief::where('id_br', $id_br)->first();
        $data->students;
        return response()->json($data);
    }

    public function insert(Request $req){
        $br = brief::create([
            'name_br' => $req->name_br,
            'descrip_br' => $req->descrip_br,
            'date_start_br' => $req->date_start_br,
            'date_end_br' => $req->date_end_br
        ]);
        return response()->json($br, 201);
    }
    public function assign($id_br, $id_stu){
        $br = brief::where('id_br', $id_br)->first();
        $br->students()->attach($id_stu);
        return response()->json($br, 201);
    }

    public function update(Request $req, $id_br){
        $br = brief::where('id_br', $id_br)->first();
        $br->name_br = $req->name_br;
        $br->descrip_br = $req->descrip_br;
        $br->date_start_br = $req->date_start_br;
        $br->date_end_br = $req->date_end_br;
        $br->save();
        return response()->json($br, 200);
    }

    public function delete($id_br){
        $br = brief::where('id_br', $id_br)->first();
        $br->delete();
        return response()->json(null, 204);
    }
}
