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
        // factory(MgtProducts::class, 25)->create()->each(function($post){
        //     $post->save();
        //     });

        DB::table('mgt_products')->insert([   
            ['id' => 1, 'name' => 'Acepromazine', 'description' => '', 'category' => 'quam', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:26:45'],
            ['id' => 2, 'name' => 'Atrosite', 'description' => '', 'category' => 'qui', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:26:56'],
            ['id' => 3, 'name' => 'Oxytetracycline', 'description' => '', 'category' => 'et', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:27:11'],
            ['id' => 4, 'name' => 'Enrofloxacin', 'description' => '', 'category' => 'ad', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:27:20'],
            ['id' => 5, 'name' => 'Mefenamic acid', 'description' => 'capsule', 'category' => 'eveniet', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:27:40'],
            ['id' => 6, 'name' => 'Amoxicillin', 'description' => 'capsule', 'category' => 'id', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:27:58'],
            ['id' => 7, 'name' => 'Tranexamic acid', 'description' => '', 'category' => 'recusandae', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:28:27'],
            ['id' => 8, 'name' => 'Tramadol', 'description' => '', 'category' => 'facere', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:29:29'],
            ['id' => 9, 'name' => 'Pure electrolytes', 'description' => '', 'category' => 'ea', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:29:47'],
            ['id' => 10, 'name' => 'Zoletil', 'description' => '', 'category' => 'sit', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:01'],
            ['id' => 11, 'name' => 'Xylazin', 'description' => '', 'category' => 'voluptas', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:11'],
            ['id' => 12, 'name' => 'Rabisin', 'description' => '', 'category' => 'impedit', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:21'],
            ['id' => 13, 'name' => 'Ivermectin', 'description' => '', 'category' => 'inventore', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:30'],
            ['id' => 14, 'name' => 'Pneumosure', 'description' => '', 'category' => 'ea', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:45'],
            ['id' => 15, 'name' => 'Thymol', 'description' => '', 'category' => 'itaque', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:30:58'],
            ['id' => 16, 'name' => 'Dexamethasone', 'description' => '', 'category' => 'beatae', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:31:10'],
            ['id' => 17, 'name' => 'Amoxicillin Trihydrate', 'description' => '', 'category' => 'velit', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:31:23'],
            ['id' => 18, 'name' => 'Vitamin A,D,E', 'description' => '', 'category' => 'asperiores', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:31:36'],
            ['id' => 19, 'name' => 'Amilyte -C', 'description' => '', 'category' => 'qui', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:32:01'],
            ['id' => 20, 'name' => 'Analgin (Co-pyrine)', 'description' => '', 'category' => 'laborum', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:31:48'],
            ['id' => 21, 'name' => 'Oxytocin', 'description' => '', 'category' => 'aspernatur', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:32:13'],
            ['id' => 22, 'name' => 'Coforta', 'description' => '', 'category' => 'expedita', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:32:27'],
            ['id' => 23, 'name' => 'Vitamin B complex', 'description' => '', 'category' => 'sed', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:32:41'],
            ['id' => 24, 'name' => 'Cefazolin (Fazlin)', 'description' => '', 'category' => 'quae', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:32:55'],
            ['id' => 25, 'name' => 'Nematocide ( Dewormer )', 'description' => '', 'category' => 'magnam', 'amount' => '1', 'remarks' => '', 'picture' => '', 'user_id' => '1', 'active' => '1', 'created_at' => '2022-04-18 13:27:58', 'updated_at' => '2022-04-22 12:33:14'],

        ]);
    }
}
