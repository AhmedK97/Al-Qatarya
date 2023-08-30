<?php

namespace Database\Factories;

use App\Models\Project;
use Faker\Factory as Faker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Model;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Project::class;

    public function definition(): array
    {
        \DB::table('projects')->delete();

        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');

        Model::unguard();

        Project::truncate();

        $enFaker = Faker::create('en_US');
        $arFaker = Faker::create('ar_SA');

        return [
            'title' => [
                'ar' => $arFaker->realText($nbWords = 10, $variableNbWords = true),
                'en' => $enFaker->realText($nbWords = 10, $variableNbWords = true),
            ],

            'agent' => [
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

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Project $project) {
            // add project_image to project

            $image = 'https://picsum.photos/720.webp';
            $project->addMediaFromUrl($image)->toMediaCollection(Project::PROJECT_MAIN_IMAGE);

            // add project_images to project
            for ($i = 0; $i < 5; $i++) {
                $image = 'https://picsum.photos/720.webp';
                $project->addMediaFromUrl($image)->toMediaCollection(Project::PROJECT_IMAGES);
            }
        });
    }
}
