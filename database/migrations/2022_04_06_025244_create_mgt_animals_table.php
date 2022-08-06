<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_animals', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();   
            $table->string('farm_name')->nullable();  
            $table->integer('type')->reference("tbl_generals")->on('id');   
            $table->string('date')->nullable();  
            $table->string('specific_type')->nullable();   
            $table->string('description')->nullable();   
            $table->string('location')->nullable();   
            $table->string('count')->nullable();    
            $table->string('picture')->nullable();  
             
            $table->string('owner')->nullable();   
            $table->string('email')->nullable();   
            $table->string('address')->nullable();   
            $table->string('phone')->nullable();   
          
            $table->string('veterinarians')->nullable();  
            $table->string('attachment')->nullable();  
            $table->string('remarks')->nullable();   
      
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
        Schema::dropIfExists('mgt_animals');
    }
}
