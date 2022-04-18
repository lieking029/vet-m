<?php

use App\Models\Vet\MgtProducts;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(MgtProducts::class, 25)->create()->each(function($post){
            $post->save();
            });
    }
}
