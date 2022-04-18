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
        ['id' => 1, 'type' => '2', 'nick_name' => '', 'first_name' => 'Firstname', 'last_name' => 'Lastname', 'middle_name' => 'Middlename', 'contact_no' => '', 'address' => 'a', 'birth_date' => '2022-04-18', 'picture' => '', 'email' => 'admin@gmail.com', 'password' => '$2y$10$D2ZkrhoK38Nl1JZWIsycZe8zO7V.i4mw8I4TF84t/h6Fcq3jYTZFW', 'active' => '1', 'remember_token' => '', 'created_at' => '2022-04-18 13:24:20', 'updated_at' => '2022-04-18 13:24:20'],
        ['id' => 2, 'type' => '1', 'nick_name' => '', 'first_name' => 'Firstname', 'last_name' => 'Lastname', 'middle_name' => 'Middlename', 'contact_no' => '', 'address' => 'a', 'birth_date' => '2022-04-18', 'picture' => '', 'email' => 'client@gmail.com', 'password' => '$2y$10$D2ZkrhoK38Nl1JZWIsycZe8zO7V.i4mw8I4TF84t/h6Fcq3jYTZFW', 'active' => '1', 'remember_token' => '', 'created_at' => '2022-04-18 13:24:20', 'updated_at' => '2022-04-18 13:24:30'],
              
         
    ]);  
    }
}
