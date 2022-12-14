<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMgtCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mgt_carts', function (Blueprint $table) {
            $table->id();
            $table->text('product_id')->reference("mgt_products")->on('id');  
            $table->text('quantity')->nullable();
            $table->text('user_id')->reference("users")->on('id');  
            $table->integer('active')->default(1);   
            $table->integer('amount')->default(0)->nullable();
            $table->integer('total_amount')->default(0)->nullable();
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
        Schema::dropIfExists('mgt_carts');
    }
}
