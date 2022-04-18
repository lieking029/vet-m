<?php
 
use Illuminate\Database\Seeder; 
class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
         
        DB::table('permissions')->insert([   
            ['id' => 1, 'name' => 'My Pets', 'description' => '', 'guard_name' => 'api', 'created_at' => '2021-12-13 09:30:10', 'updated_at' => '2022-04-10 04:39:15'],
            ['id' => 2, 'name' => 'Services', 'description' => '', 'guard_name' => 'api', 'created_at' => '2021-12-13 09:30:20', 'updated_at' => '2022-04-10 04:39:23'],
            ['id' => 3, 'name' => 'Appointment', 'description' => '', 'guard_name' => 'api', 'created_at' => '2022-04-04 17:40:59', 'updated_at' => '2022-04-10 04:39:32'],
            ['id' => 4, 'name' => 'Shop', 'description' => '', 'guard_name' => 'api', 'created_at' => '2022-04-04 17:41:10', 'updated_at' => '2022-04-11 15:46:46'],
            ['id' => 5, 'name' => 'Announcements', 'description' => 'Admin', 'guard_name' => 'api', 'created_at' => '2022-04-04 17:41:21', 'updated_at' => '2022-04-10 04:40:15'],
            ['id' => 6, 'name' => 'Settings', 'description' => 'Settings', 'guard_name' => 'api', 'created_at' => '2022-04-05 01:13:08', 'updated_at' => '2022-04-10 04:40:26'],
            ['id' => 7, 'name' => 'Reports', 'description' => 'Reports', 'guard_name' => 'api', 'created_at' => '2022-04-10 04:40:36', 'updated_at' => '2022-04-10 04:40:36'],
            ['id' => 8, 'name' => 'My Farm', 'description' => '', 'guard_name' => 'api', 'created_at' => '2022-04-16 14:23:34', 'updated_at' => '2022-04-16 14:23:34'],
                                                 ]);  
            
    }
}
