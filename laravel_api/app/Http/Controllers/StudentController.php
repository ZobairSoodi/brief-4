<?php

namespace App\Http\Controllers;

use App\Models\student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function get_all(){
        $data = student::all();
        return response()->json($data);
    }

    public function get($id_stu){
        $data = student::where('id_stu', $id_stu)->first();
        return response()->json($data);
    }

    public function get_with_br($id_stu){
        $data = student::where('id_stu', $id_stu)->first();
        $data->briefs;
        return response()->json($data);
    }

    public function insert(Request $req){
        $stu = student::create([
            'name_stu' => $req->name_stu,
            'descrip_stu' => $req->descrip_stu,
            'id_prom' => $req->id_prom
        ]);
        return response()->json($stu, 201);
    }

    public function update(Request $req, $id_stu){
        $stu = student::where('id_stu', $id_stu)->first();
        $stu->name_stu = $req->name_stu;
        $stu->descrip_stu = $req->descrip_stu;
        $stu->id_prom = $req->id_prom;
        $stu->save();
        return response()->json($stu, 200);
    }

    public function delete($id_stu){
        $stu = student::where('id_stu', $id_stu)->first();
        $stu->delete();
        return response()->json(null, 204);
    }
}
