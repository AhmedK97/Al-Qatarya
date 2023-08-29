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


    protected $model = Projects::class;


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
                'ar' => $arFaker->realText($nbWords = 10, $variableNbWords = true),
                'en' => $enFaker->realText($nbWords = 10, $variableNbWords = true),
            ],

            'agent' =>[
                'ar' => $arFaker->name,
                'en' => $enFaker->name,
            ],
            'address' => [
                'ar' => $arFaker->realText($nbWords = 10, $variableNbWords = true),
                'en' => $enFaker->realText($nbWords = 10, $variableNbWords = true),
            ],
            'space_area' => $enFaker->randomNumber(5, true),
            'date' => now(),
            'description' => [
                'ar' => $arFaker->realText($nbWords = 50, $variableNbWords = true),
                'en' => $enFaker->realText($nbWords = 50, $variableNbWords = true),
            ],
        ];

    }
}
