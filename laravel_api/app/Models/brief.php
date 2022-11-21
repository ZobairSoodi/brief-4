<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brief extends Model
{
    use HasFactory;

    protected $table = 'brief';
    protected $primaryKey = 'id_br';
    public $timestamps = false;
    protected $fillable = ['name_br', 'descrip_br', 'date_start_br', 'date_end_br'];

    public function tasks(){
        return $this->hasMany(task::class, 'id_br', 'id_br');
    }

    public function students(){
        return $this->belongsToMany(student::class, 'brief_student', 'id_br', 'id_stu');
    }
}
