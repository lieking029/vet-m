<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_appointments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('ref_id');  
            $table->integer('service_id')->reference("mgt_services")->on('id');  
            $table->float('type')->nullable();    
            $table->float('amount')->nullable();    
            $table->dateTime('dated')->nullable();    
            $table->text('remarks')->nullable();    
            $table->integer('status')->reference("tbl_generals")->on('id');  
            $table->text('user_id')->reference("users")->on('id');  
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
        Schema::dropIfExists('mgt_appointments');
    }
}
