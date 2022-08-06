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
            $table->bigIncrements('id');
            $table->text('name')->nullable();   
            $table->text('farm_name')->nullable();  
            $table->integer('type')->reference("tbl_generals")->on('id');   
            $table->text('date')->nullable();  
            $table->text('specific_type')->nullable();   
            $table->text('description')->nullable();   
            $table->text('location')->nullable();   
            $table->text('count')->nullable();    
            $table->text('picture')->nullable();  
             
            $table->text('owner')->nullable();   
            $table->text('email')->nullable();   
            $table->text('address')->nullable();   
            $table->text('phone')->nullable();   
          
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
        Schema::dropIfExists('mgt_animals');
    }
}
