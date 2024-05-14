<?php

namespace Database\Seeders;

use App\Models\FAQ;
use Illuminate\Database\Seeder;

class FAQSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        FAQ::truncate();

        FAQ::create([
            'question' => 'What is the capital of France?',
            'answer' => 'Paris',
            'locale' => 'en',
        ]);

        FAQ::create([
            'question' => 'What is the capital of Egypt?',
            'answer' => 'Cairo',
            'locale' => 'en',
        ]);

        FAQ::create([
            'question' => 'ما هو عاصمة فرنسا؟',
            'answer' => 'باريس',
            'locale' => 'ar',
        ]);

        FAQ::create([
            'question' => 'ما هو عاصمة مصر؟',
            'answer' => 'القاهرة',
            'locale' => 'ar',
        ]);


    }
}
