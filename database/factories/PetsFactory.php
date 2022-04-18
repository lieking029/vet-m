<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
 
use App\Models\Vet\MgtAnimals;
use Faker\Generator as Faker;

$factory->define(MgtAnimals::class, function (Faker $faker) {

    $temp = ['Male','Female'];
    return [
        'name' => $faker->word,
        'birth_date' => $faker->date,
        'breed' => $faker->name,
        'gender' =>  $temp[array_rand($temp,1)],
        'color' => $faker->safeColorName,
        'picture' => '',
        'microchip' => $faker->rgbColor,
        'weight' => $faker->randomDigitNot(0),
        'mother' => $faker->name,
        'mother_breed' => $faker->name,
        'father' => $faker->name,
        'father_breed' => $faker->name,
        'owner' => $faker->name,
        'phone' => $faker->randomNumber(8, true),
        'email' => $faker->email,
        'address' => $faker->address,
        'allergies' => '[]',
        'veterinarians' => '[]',
        'attachment' => '[]',
        'remarks' => '[]',
        'user_id' => 1, 
 
    ];
});
