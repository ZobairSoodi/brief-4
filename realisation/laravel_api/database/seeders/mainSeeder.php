<?php

namespace Database\Seeders;

use App\Models\promotion;
use Illuminate\Support\Str;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class mainSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        for($i = 1; $i <= 5; $i++){
            DB::table('promotion')->insert([
                'name_prom' => Str::random(10),
                'descrip_prom' => Str::random(10)
            ]);

            DB::table('brief')->insert([
                'name_br' => Str::random(10),
                'descrip_br' => Str::random(10),
                'date_start_br' => '2022-01-01',
                'date_end_br' => '2022-01-06'
            ]);
        }

        for($i = 1; $i <= 25; $i++){
            DB::table('student')->insert([
                'name_stu' => Str::random(10),
                'descrip_stu' => Str::random(10),
                'id_prom' => $i%5 + 1
            ]);

            DB::table('task')->insert([
                'name_task' => Str::random(10),
                'descrip_task' => Str::random(10),
                'date_start_task' => '2022-01-01',
                'date_end_task' => '2022-01-05',
                'id_br' => $i%5 + 1
            ]);
        }


    }
}
