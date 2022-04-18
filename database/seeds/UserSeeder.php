<?php

use Illuminate\Database\Seeder; 
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {  DB::table('users')->insert([   
        ['id' => 1, 'first_name'=>"Firstname", "last_name"=> 'Lastname', "middle_name"=>'Middlename','email' => 'admin@gmail.com', 'password' => '$2y$10$D2ZkrhoK38Nl1JZWIsycZe8zO7V.i4mw8I4TF84t/h6Fcq3jYTZFW',  'active' => '1',  'remember_token' => '', 'created_at' => null, 'updated_at' => null,  "type"=>1],
             
         
    ]);  
    }
}
