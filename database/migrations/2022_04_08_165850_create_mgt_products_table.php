<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name')->nullable();  
            $table->text('description')->nullable();  
            $table->text('category')->nullable();  
            $table->text('amount')->nullable();  
            $table->text('remarks')->nullable();   
            $table->text('picture')->nullable();   
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
        Schema::dropIfExists('mgt_products');
    }
}
