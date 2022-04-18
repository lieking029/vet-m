<?php
 
use Illuminate\Database\Seeder;

class PetsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(MgtAnimals::class, 10)->create()->each(function($post){
        //     $post->save();
        //     });
        DB::table('mgt_pets')->insert([    
            ['id' => 1, 'name' => 'numquam', 'birth_date' => '1985-07-09', 'breed' => 'Mona White', 'gender' => 'female', 'color' => 'olive', 'picture' => 'pngwing.com (7).png~1649726559.png', 'microchip' => '62,72,0', 'weight' => '1', 'mother' => 'Prof. Ally Breitenberg', 'mother_breed' => 'Ms. Elvie Goyette I', 'father' => 'Richard DuBuque', 'father_breed' => 'Ernesto Kuphal', 'owner' => 'Jayda Morissette', 'phone' => '65710622', 'email' => 'adriana.hickle@yahoo.com', 'address' => '85004 Zachery Underpass
                West Norbert, KY 26426-9885', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:22:45'],
                ['id' => 2, 'name' => 'Spike', 'birth_date' => '1979-07-07', 'breed' => 'Raegan Mayer', 'gender' => 'female', 'color' => 'olive', 'picture' => 'pngwing.com (6).png~1649726577.png', 'microchip' => '128,104,150', 'weight' => '7', 'mother' => 'Dr. Tyra Howell', 'mother_breed' => 'Laura Ortiz', 'father' => 'Adelle Stamm', 'father_breed' => 'Cory Littel', 'owner' => 'Lulu Ebert', 'phone' => '39523515', 'email' => 'darwin.kerluke@spencer.net', 'address' => '26827 Durgan Trace Apt. 204
                Murphymouth, KY 46126', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:23:03'],
                ['id' => 3, 'name' => 'Marvin', 'birth_date' => '1996-12-30', 'breed' => 'River Bartoletti Jr.', 'gender' => 'male', 'color' => 'teal', 'picture' => 'pngwing.com (3).png~1649726592.png', 'microchip' => '201,202,79', 'weight' => '7', 'mother' => 'Dominic Gottlieb IV', 'mother_breed' => 'Elliott Waters MD', 'father' => 'Larry Crona', 'father_breed' => 'Raquel Hill', 'owner' => 'Brenden Rogahn', 'phone' => '26425927', 'email' => 'howe.dedric@schmitt.net', 'address' => '7833 Deon Road
                Cormierhaven, MI 89664-8376', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:23:18'],
                ['id' => 4, 'name' => 'Miming', 'birth_date' => '1974-11-12', 'breed' => 'Domenico Reinger', 'gender' => 'male', 'color' => 'yellow', 'picture' => 'pngwing.com (2).png~1649726608.png', 'microchip' => '252,5,96', 'weight' => '7', 'mother' => 'Ms. Stephany Schiller', 'mother_breed' => 'Genevieve Friesen I', 'father' => 'Dr. Lorna Hammes Jr.', 'father_breed' => 'Ressie Nienow', 'owner' => 'Ludie Effertz DVM', 'phone' => '53407955', 'email' => 'clark.leffler@yahoo.com', 'address' => '55580 Nelson Walk
                Alberthaland, OR 54602-6606', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:23:35'],
                ['id' => 5, 'name' => 'nesciunt', 'birth_date' => '1994-08-11', 'breed' => 'Dr. Giovani Powlowski DVM', 'gender' => 'male', 'color' => 'fuchsia', 'picture' => 'b.png~1649726700.png', 'microchip' => '96,14,19', 'weight' => '7', 'mother' => 'Jeremie Crona', 'mother_breed' => 'Mr. Branson Ullrich', 'father' => 'Isabell Jacobs', 'father_breed' => 'Kristin Gerlach', 'owner' => 'Dr. Rose Raynor', 'phone' => '23740888', 'email' => 'anibal.considine@yahoo.com', 'address' => '648 Cormier Expressway
                Langworthfurt, ME 15651-5769', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:25:03'],
                ['id' => 6, 'name' => 'nulla', 'birth_date' => '1979-01-21', 'breed' => 'Prof. Damian Treutel PhD', 'gender' => 'female', 'color' => 'gray', 'picture' => 'a.png~1649726711.png', 'microchip' => '62,121,89', 'weight' => '1', 'mother' => 'Mrs. Shyann Waelchi', 'mother_breed' => 'Winston Hermann', 'father' => 'Mr. Boris Bode Jr.', 'father_breed' => 'Ms. Bonnie Krajcik V', 'owner' => 'Aileen Ernser', 'phone' => '64917664', 'email' => 'mohr.antwan@wintheiser.net', 'address' => '566 Sanford Meadow
                Glovermouth, AK 46669', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:25:15'],
                ['id' => 7, 'name' => 'rem', 'birth_date' => '1993-04-03', 'breed' => 'Miss Candace Daniel', 'gender' => 'female', 'color' => 'olive', 'picture' => 'pngwing.com (9).png~1649726759.png', 'microchip' => '187,44,89', 'weight' => '9', 'mother' => 'Ulises Smith', 'mother_breed' => 'Eldon Murray II', 'father' => 'Jodie Effertz', 'father_breed' => 'Prof. Olaf McLaughlin', 'owner' => 'Mr. Kristian VonRueden PhD', 'phone' => '93978770', 'email' => 'dustin.kemmer@yahoo.com', 'address' => '289 Jared Extensions Suite 478
                Goodwinberg, AR 40402', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:26:02'],
                ['id' => 8, 'name' => 'alias', 'birth_date' => '2004-02-26', 'breed' => 'Electa Hermann DDS', 'gender' => 'male', 'color' => 'navy', 'picture' => 'pngwing.com (10).png~1649726789.png', 'microchip' => '220,15,165', 'weight' => '7', 'mother' => 'Mr. Griffin Kuphal IV', 'mother_breed' => 'Ms. Rita OKeefe I', 'father' => 'Brad Lowe', 'father_breed' => 'Prof. Brian DAmore Jr.', 'owner' => 'Leslie Veum', 'phone' => '38578658', 'email' => 'francisca.kris@gmail.com', 'address' => '67165 Brayan Inlet Apt. 477
                Vinceburgh, GA 96448', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:26:32'],
                ['id' => 9, 'name' => 'nihil', 'birth_date' => '2012-07-02', 'breed' => 'Dr. Einar Schoen', 'gender' => 'female', 'color' => 'yellow', 'picture' => 'pngwing.com (11).png~1649726809.png', 'microchip' => '48,83,89', 'weight' => '1', 'mother' => 'Prof. Brianne Konopelski', 'mother_breed' => 'Alessandra Kemmer III', 'father' => 'Brock McGlynn DVM', 'father_breed' => 'Mrs. Shaniya Kunze', 'owner' => 'Ada Mueller', 'phone' => '60814417', 'email' => 'bahringer.nathen@braun.com', 'address' => '98449 Gregg Turnpike
                East Angelinaland, FL 54397-3137', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:26:52'],
                ['id' => 10, 'name' => 'molestiae', 'birth_date' => '2010-05-12', 'breed' => 'Dr. Joanie Huels Sr.', 'gender' => 'male', 'color' => 'blue', 'picture' => 'pngwing.com (12).png~1649726832.png', 'microchip' => '47,253,166', 'weight' => '3', 'mother' => 'Elisa Feeney', 'mother_breed' => 'Reid Bernhard', 'father' => 'Guido Bednar Sr.', 'father_breed' => 'Prof. Nicholas Morar', 'owner' => 'Violette Harber', 'phone' => '67814752', 'email' => 'bechtelar.dereck@hackett.info', 'address' => '169 Lueilwitz Stream
                Baumbachmouth, FL 92284-9111', 'allergies' => '[]', 'veterinarians' => '[]', 'attachment' => '[]', 'remarks' => '[]', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-12 01:22:12', 'updated_at' => '2022-04-12 01:27:15'],

        ]);

    }
}
