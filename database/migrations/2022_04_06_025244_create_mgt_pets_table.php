<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtPetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_pets', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();  
            $table->string('birth_date')->nullable();  
            $table->string('breed')->nullable();    
            $table->string('gender')->nullable();   
            $table->string('color')->nullable();    
            $table->string('picture')->nullable();  
            $table->string('microchip')->nullable();
            $table->string('weight')->nullable(); 

            $table->string('mother')->nullable();  
            $table->string('mother_breed')->nullable();  
            $table->string('father')->nullable();  
            $table->string('father_breed')->nullable();  

            
            $table->string('owner')->nullable();  
            $table->string('phone')->nullable();  
            $table->string('email')->nullable();  
            $table->string('address')->nullable();  

            
            $table->string('allergies')->nullable();  
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
        Schema::dropIfExists('mgt_pets');
    }
}
