<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();//this is our reference for other table for relationship 
            $table->integer('type')->default(1);   
            $table->string('nick_name')->nullable();     
            $table->string('first_name')->nullable();     
            $table->string('last_name')->nullable();    
            $table->string('middle_name')->nullable();    
            $table->string('contact_no')->nullable();     
            $table->string('address')->nullable();    

            $table->string('birth_date')->nullable();    
            $table->string('picture')->nullable();     

            $table->string('email')->unique();   
            $table->string('password')->nullable();  
            $table->integer('active')->default(1);  
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
