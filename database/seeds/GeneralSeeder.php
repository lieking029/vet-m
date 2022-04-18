<?php

use App\Models\TblGenerals;
use Illuminate\Database\Seeder;

class GeneralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    { 
        DB::table('tbl_generals')->insert([     

            ['id' => 1, 'name' => 'Status List', 'description' => '', 'group' => 'Status', 'main' => '1', 'active' => '1', 'created_at' => '2022-04-04 17:44:55', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 2, 'name' => 'Pending', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:12', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 3, 'name' => 'Accepted', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:16', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 4, 'name' => 'Ongoing', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:20', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 5, 'name' => 'Cancelled', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:20', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 6, 'name' => 'For Re-visit', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:20', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 7, 'name' => 'Closed', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-04 17:45:20', 'updated_at' => '2022-04-13 11:16:11'],
            ['id' => 8, 'name' => 'Declined', 'description' => 'Status', 'group' => '1', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-13 23:40:13', 'updated_at' => '2022-04-13 23:40:18'],
            ['id' => 9, 'name' => 'Animal List', 'description' => '', 'group' => 'Animals', 'main' => '1', 'active' => '1', 'created_at' => '2022-04-16 14:19:54', 'updated_at' => '2022-04-16 14:19:54'],
            ['id' => 10, 'name' => 'Chicken / Duck / Pegeon', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:20:50', 'updated_at' => '2022-04-16 14:20:50'],
            ['id' => 11, 'name' => 'Hog', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:20:56', 'updated_at' => '2022-04-16 14:20:56'],
            ['id' => 12, 'name' => 'Cattle / Carabao / Horse', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:21:08', 'updated_at' => '2022-04-16 14:21:08'],
            ['id' => 13, 'name' => 'Goat', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:21:14', 'updated_at' => '2022-04-16 14:21:14'],
            ['id' => 14, 'name' => 'Fighting Cock (greater than 4 months old)', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:21:26', 'updated_at' => '2022-04-16 14:21:56'],
            ['id' => 15, 'name' => 'Fighting Cock (less than 4 months old)', 'description' => 'Animals', 'group' => '9', 'main' => '0', 'active' => '1', 'created_at' => '2022-04-16 14:22:20', 'updated_at' => '2022-04-16 14:22:20'],
                                                                    ]); 
  
    }
}
