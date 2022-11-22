<?php

namespace App\Http\Controllers;

use App\Models\todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function get_all(){
        $data = todo::all();
        return response()->json($data);
    }

    public function insert(Request $req){
        $data = new todo();
        $data->name = $req->name;
        $data->descrip = $req->descrip;
        $data->save();
        return response()->json($data, 201);
    }

    public function delete($id){
        $data = todo::where('id', $id)->first();
        $data->delete();
        return response()->json(null, 204);
    }
}
