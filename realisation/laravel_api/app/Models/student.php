<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class student extends Model
{
    use HasFactory;

    protected $table = 'student';
    protected $primaryKey = 'id_stu';
    public $timestamps = false;
    protected $fillable = ['name_stu', 'descrip_stu', 'id_prom'];

    public function promotion(){
        return $this->belongsTo(promotion::class, 'id_prom', 'id_prom');
    }

    public function briefs(){
        return $this->belongsToMany(brief::class, 'brief_student', 'id_br', 'id_stu');
    }

    public function tasks(){
        return $this->belongsToMany(task::class, 'student_task', 'id_stu', 'id_task')->withPivot("status");
    }
}
