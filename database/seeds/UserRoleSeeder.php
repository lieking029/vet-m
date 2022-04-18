<?php
 
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('roles')->insert([   
            ['id' => 1, 'name' => 'Admin', 'description' => '', 'guard_name' => 'api', 'created_at' => '2021-11-04 21:27:22', 'updated_at' => '2021-11-04 16:19:59'],
            ['id' => 2, 'name' => 'Client', 'description' => '', 'guard_name' => 'api', 'created_at' => '2021-11-04 21:28:56', 'updated_at' => '2022-04-10 04:38:27'],
                           ]);  
    }
}
