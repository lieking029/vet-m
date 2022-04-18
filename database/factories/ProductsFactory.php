<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
 
use App\Models\Vet\MgtProducts;
use Faker\Generator as Faker;

$factory->define(MgtProducts::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->sentence(),
        'amount' =>  $faker->randomNumber(8, true), 
        'category' => $faker->word,
        'remarks' =>$faker->sentence, 
        'user_id' => 1, 
        'active' => 1, 
    ];
 
});
