<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class task extends Model
{
    use HasFactory;

    protected $table = 'task';
    protected $primaryKey = 'id_task';
    public $timestamps = false;
    protected $fillable = ['name_task', 'descrip_task', 'date_start_task', 'date_end_task', 'id_br'];

    public function brief(){
        return $this->belongsTo(brief::class, 'id_br', 'id_br');
    }
}
