<?php

namespace App\Http\Controllers;

use App\Models\promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    public function get_all(){
        $data = promotion::all();
        return response()->json($data);
    }

    public function get($id_prom){
        $data = promotion::where('id_prom', $id_prom)->first();
        return response()->json($data);
    }

    public function get_with_stu($id_prom){
        $data = promotion::where('id_prom', $id_prom)->first();
        $data->students;
        return response()->json($data);
    }

    public function insert(Request $req){
        $prom = promotion::create([
            'name_prom' => $req->name_prom,
            'descrip_prom' => $req->descrip_prom
        ]);
        return response()->json($prom, 201);
    }

    public function update(Request $req, $id_prom){
        $prom = promotion::where('id_prom', $id_prom)->first();
        $prom->name_prom = $req->name_prom;
        $prom->descrip_prom = $req->descrip_prom;
        $prom->save();
        return response()->json($prom, 200);
    }

    public function delete($id_prom){
        $prom = promotion::where('id_prom', $id_prom)->first();
        $prom->delete();
        return response()->json(null, 204);
    }
}
