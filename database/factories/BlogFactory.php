<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as Faker;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $arFaker = Faker::create('ar_SA');

        return [
            'title' => $arFaker->realText($nbWords = 50, $variableNbWords = true),
            'description' => $arFaker->realText($maxNbChars = 4000, $indexSize = 2),
            'locale' => $arFaker->randomElement(['en', 'ar']),
            'status' => $arFaker->randomElement(['published', 'draft']),
            'seo_title' => $arFaker->realText($nbWords = 50, $variableNbWords = true),
            'seo_description' => $arFaker->realText($nbWords = 50, $variableNbWords = true),
            'seo_keywords' => $arFaker->realText($nbWords = 50, $variableNbWords = true),
        ];
    }

    /**
     * Configure the model factory.
     *
     * @return $this
     */
    public function configure()
    {
        return $this->afterCreating(function (Blog $blog) {
            $image = 'https://picsum.photos/720.webp';
            $blog->addMediaFromUrl($image)->toMediaCollection('blog_image');
        });
    }
}
