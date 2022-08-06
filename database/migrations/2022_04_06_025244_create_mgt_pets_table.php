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
            $table->bigIncrements('id');
            $table->text('name')->nullable();  
            $table->text('birth_date')->nullable();  
            $table->text('breed')->nullable();    
            $table->text('gender')->nullable();   
            $table->text('color')->nullable();    
            $table->text('picture')->nullable();  
            $table->text('microchip')->nullable();
            $table->text('weight')->nullable(); 

            $table->text('mother')->nullable();  
            $table->text('mother_breed')->nullable();  
            $table->text('father')->nullable();  
            $table->text('father_breed')->nullable();  

            
            $table->text('owner')->nullable();  
            $table->text('phone')->nullable();  
            $table->text('email')->nullable();  
            $table->text('address')->nullable();  

            
            $table->text('allergies')->nullable();  
            $table->text('veterinarians')->nullable();  
            $table->text('attachment')->nullable();  
            $table->text('remarks')->nullable();  
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
        Schema::dropIfExists('mgt_pets');
    }
}
