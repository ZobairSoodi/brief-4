<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class promotion extends Model
{
    use HasFactory;
    protected $table = 'promotion';
    protected $primaryKey = 'id_prom';
    public $timestamps = false;
    protected $fillable = ['name_prom', 'descrip_prom'];

    public function students(){
        return $this->hasMany(student::class, 'id_prom', 'id_prom');
    }
}
