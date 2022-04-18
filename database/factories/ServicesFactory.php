<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
 
use App\Models\Vet\MgtServices;
use Faker\Generator as Faker;


$factory->define(MgtServices::class, function (Faker $faker) {
 
    return [
        'name' => $faker->word,
        'description' => $faker->sentence(),
        'amount' =>  $faker->randomNumber(8, true),
        'handled_by' =>$faker->name , 
        'user_id' => 1, 
 
    ];
});
