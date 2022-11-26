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
        Schema::create('brief', function (Blueprint $table) {
            $table->integer('id_br', true);
            $table->string('name_br');
            $table->text('descrip_br');
            $table->date('date_start_br');
            $table->date('date_end_br');
        });

        Schema::create('task', function (Blueprint $table) {
            $table->integer('id_task', true);
            $table->string('name_task');
            $table->text('descrip_task');
            $table->date('date_start_task');
            $table->date('date_end_task');
            $table->integer('id_br');
            $table->foreign('id_br')->references('id_br')->on('brief')->onDelete('cascade');
        });

        Schema::create('brief_student', function (Blueprint $table) {
            $table->integer('id_stu');
            $table->integer('id_br');
            $table->foreign('id_stu')->references('id_stu')->on('student')->onDelete('cascade');
            $table->foreign('id_br')->references('id_br')->on('brief')->onDelete('cascade');
            $table->primary(['id_stu', 'id_br']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task');
        Schema::dropIfExists('brief_student');
        Schema::dropIfExists('brief');
    }
};
