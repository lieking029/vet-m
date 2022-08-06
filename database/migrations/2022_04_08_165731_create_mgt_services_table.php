<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_services', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();  
            $table->string('description')->nullable();  
            $table->string('amount')->nullable();  
            $table->string('handled_by')->nullable();   
            $table->string('picture')->nullable();   
            $table->string('user_id')->reference("users")->on('id');  
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
        Schema::dropIfExists('mgt_services');
    }
}
