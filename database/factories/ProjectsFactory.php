<?php

namespace Database\Factories;

use App\Models\Projects;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;
use Illuminate\Database\Eloquent\Model;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Projects>
 */
class ProjectsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        \DB::table('projects')->delete();

        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        Model::unguard();

        Projects::truncate();

        $enFaker = Faker::create('en_US');
        $arFaker = Faker::create('ar_SA');

        return [
            'title' => [
                'en' => $enFaker->realText($nbWords = 10, $variableNbWords = true),
                'ar' => $arFaker->realText($nbWords = 10, $variableNbWords = true),
            ],
            'agent' =>[
                'en' => $enFaker->name,
                'ar' => $arFaker->name,
            ],
            'address' => [
                'en' => $enFaker->realText($nbWords = 10, $variableNbWords = true),
                'ar' => $arFaker->realText($nbWords = 10, $variableNbWords = true)
            ],
            'space_area' => $enFaker->randomNumber(5, true),
            'date' => now(),
            'description' => $enFaker->realText($maxNbChars = 4000, $indexSize = 2),
        ];

    }
}
