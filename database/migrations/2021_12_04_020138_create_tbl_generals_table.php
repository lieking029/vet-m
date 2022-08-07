<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTblGeneralsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_generals', function (Blueprint $table) {
            $table->bigIncrements('id'); 
            $table->text('name');
            $table->text('description')->nullable();  
            $table->text('group')->nullable();  
            $table->integer('main');  
            $table->integer('active')->default(1);  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('general_tables');
    }
}
