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
            $table->text('nick_name')->nullable();     
            $table->text('first_name')->nullable();     
            $table->text('last_name')->nullable();    
            $table->text('middle_name')->nullable();    
            $table->text('contact_no')->nullable();     
            $table->text('address')->nullable();    

            $table->text('birth_date')->nullable();    
            $table->text('picture')->nullable();     

            $table->text('email')->unique();   
            $table->text('password')->nullable();  
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
