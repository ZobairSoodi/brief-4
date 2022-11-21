<?php

namespace App\Http\Controllers;

use App\Models\task;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\task;

class TaskController extends Controller
{
    public function get_all(){
        $data = task::all();
        return response()->json($data);
    }

    public function get($id_task){
        $data = task::where('id_task', $id_task)->first();
        return response()->json($data);
    }

    public function insert(Request $req){
        $task = task::create([
            'name_task' => $req->name_task,
            'descrip_task' => $req->descrip_task,
            'date_start_task' => $req->date_start_task,
            'date_end_task' => $req->date_end_task,
            'id_br' => $req->id_br
        ]);
        return response()->json($task, 201);
    }

    public function update(Request $req, $id_task){
        $task = task::where('id_task', $id_task)->first();
        $task->name_task = $req->name_task;
        $task->descrip_task = $req->descrip_task;
        $task->date_start_task = $req->date_start_task;
        $task->date_end_task = $req->date_end_task;
        $task->id_br = $req->id_br;
        $task->save();
        return response()->json($task, 200);
    }

    public function delete($id_task){
        $task = task::where('id_task', $id_task)->first();
        $task->delete();
        return response()->json(null, 204);
    }
}
