<?php

use App\Http\Controllers\BriefController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TaskController;
use App\Models\promotion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Promotions
Route::get('promotions', [PromotionController::class, 'get_all']);
Route::get('promotions/{id_prom}', [PromotionController::class, 'get']);
Route::get('promotions/{id_prom}/students', [PromotionController::class, 'get_with_stu']);
Route::post('promotions', [PromotionController::class, 'insert']);
Route::put('promotions/{id_prom}', [PromotionController::class, 'update']);
Route::delete('promotions/{id_prom}', [PromotionController::class, 'delete']);


// Students
Route::get('students', [StudentController::class, 'get_all']);
Route::get('students/{id_stu}', [StudentController::class, 'get']);
Route::get('students/{id_stu}/briefs', [StudentController::class, 'get_with_br']);
Route::post('students', [StudentController::class, 'insert']);
Route::put('students/{id_stu}', [StudentController::class, 'update']);
Route::delete('students/{id_stu}', [StudentController::class, 'delete']);


// Briefs
Route::get('briefs', [BriefController::class, 'get_all']);
Route::get('briefs/{id_brief}', [BriefController::class, 'get']);
Route::get('briefs/{id_brief}/tasks', [BriefController::class, 'get_with_tasks']);
Route::get('briefs/{id_brief}/students', [BriefController::class, 'get_with_stu']);
Route::post('briefs', [BriefController::class, 'insert']);
Route::post('briefs/{id_brief}/assign/{id_stu}', [BriefController::class, 'assign']);
Route::put('briefs/{id_brief}', [BriefController::class, 'update']);
Route::delete('briefs/{id_brief}', [BriefController::class, 'delete']);


// Tasks
Route::get('tasks', [TaskController::class, 'get_all']);
Route::get('tasks/{id_task}', [TaskController::class, 'get']);
Route::post('tasks', [TaskController::class, 'insert']);
Route::put('tasks/{id_task}', [TaskController::class, 'update']);
Route::delete('tasks/{id_task}', [TaskController::class, 'delete']);