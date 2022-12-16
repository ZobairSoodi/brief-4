<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('student_task', function (Blueprint $table) {
            $table->integer("state");
            $table->integer('id_task');
            $table->integer('id_stu');
            $table->foreign('id_stu')->references('id_stu')->on('student')->onDelete('cascade');
            $table->foreign('id_task')->references('id_task')->on('task')->onDelete('cascade');
            $table->primary(['id_stu', 'id_task']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('student_task');
    }
};
