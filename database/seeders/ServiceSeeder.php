<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;
use Illuminate\Support\Arr;
use Illuminate\Support\Js;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'name' => [
                    'en' => 'Thermal insulation',
                    'ar' => 'العزل الحراري',
                ],
                'body' => [
                    'en' => 'Thermal insulation is the reduction of heat transfer between objects in thermal contact or in range of radiative influence.',
                    'ar' => 'العزل الحراري هو تقليل نقل الحرارة بين الأجسام في اتصال حراري أو في نطاق التأثير الإشعاعي.',
                ],
                'seo_title' => [
                    'en' => 'Thermal Insulation Services',
                    'ar' => 'خدمات العزل الحراري',
                ],
                'seo_description' => [
                    'en' => 'We provide top-notch thermal insulation services for residential and commercial buildings.',
                    'ar' => 'نحن نقدم خدمات عزل حراري ممتازة للمباني السكنية والتجارية.',
                ],
                'seo_keywords' => [
                    'en' => 'thermal insulation, heat transfer, residential, commercial',
                    'ar' => 'العزل الحراري، نقل الحرارة، سكني، تجاري',
                ],
            ],
            [
                'name' => [
                    'en' => 'Waterproofing',
                    'ar' => 'المانع للتسرب',
                ],
                'body' => [
                    'en' => 'Waterproofing is the process of making an object or structure waterproof or water-resistant.',
                    'ar' => 'المانع للتسرب هو عملية جعل الجسم أو الهيكل مقاومًا للماء أو مقاومًا للماء.',
                ],
                'seo_title' => [
                    'en' => 'Waterproofing Services',
                    'ar' => 'خدمات المانع للتسرب',
                ],
                'seo_description' => [
                    'en' => 'We offer high-quality waterproofing services to protect your property from water damage.',
                    'ar' => 'نحن نقدم خدمات عالية الجودة للمانع للتسرب لحماية ممتلكاتك من أضرار المياه.',
                ],
                'seo_keywords' => [
                    'en' => 'waterproofing, water-resistant, property, water damage',
                    'ar' => 'المانع للتسرب، مقاوم للماء، ممتلكات، أضرار المياه',
                ],
            ],
            [
                'name' => [
                    'en' => 'Polyurethane spray',
                    'ar' => 'رش البولي يوريثين',
                ],
                'body' => [
                    'en' => 'Polyurethane spray is a versatile material used for insulation and waterproofing applications.',
                    'ar' => 'رش البولي يوريثين هو مادة متعددة الاستخدامات تُستخدم لعمليات العزل والمانع للتسرب.',
                ],
                'seo_title' => [
                    'en' => 'Polyurethane Spray Services',
                    'ar' => 'خدمات رش البولي يوريثين',
                ],
                'seo_description' => [
                    'en' => 'We provide professional polyurethane spray services for various construction projects.',
                    'ar' => 'نحن نقدم خدمات رش البولي يوريثين المحترفة لمختلف مشاريع البناء.',
                ],
                'seo_keywords' => [
                    'en' => 'polyurethane spray, insulation, waterproofing, construction',
                    'ar' => 'رش البولي يوريثين، عزل، مانع للتسرب، بناء',
                ],
            ],
            [
                'name' => [
                    'en' => 'Advanced sprinkler systems',
                    'ar' => 'أنظمة الرش المتطورة',
                ],
                'body' => [
                    'en' => 'Advanced sprinkler systems provide efficient and automated irrigation for various landscapes.',
                    'ar' => 'توفر أنظمة الرش المتطورة الري الفعال والآلي لمختلف المناظر الطبيعية.',
                ],
                'seo_title' => [
                    'en' => 'Advanced Sprinkler System Services',
                    'ar' => 'خدمات أنظمة الرش المتطورة',
                ],
                'seo_description' => [
                    'en' => 'We specialize in installing and maintaining advanced sprinkler systems for gardens and parks.',
                    'ar' => 'نحن متخصصون في تركيب وصيانة أنظمة الرش المتطورة للحدائق والمتنزهات.',
                ],
                'seo_keywords' => [
                    'en' => 'advanced sprinkler systems, irrigation, garden, park',
                    'ar' => 'أنظمة الرش المتطورة، الري، حديقة، منتزه',
                ],
            ],
            [
                'name' => [
                    'en' => 'Flooring',
                    'ar' => 'الأرضيات',
                ],
                'body' => [
                    'en' => 'We offer a wide range of flooring solutions, including hardwood, laminate, and tile.',
                    'ar' => 'نحن نقدم مجموعة واسعة من حلول الأرضيات، بما في ذلك الخشب الصلب واللامينيت والبلاط.',
                ],
                'seo_title' => [
                    'en' => 'Flooring Services',
                    'ar' => 'خدمات الأرضيات',
                ],
                'seo_description' => [
                    'en' => 'Get top-quality flooring installation and repair services for residential and commercial spaces.',
                    'ar' => 'احصل على خدمات تركيب وإصلاح الأرضيات عالية الجودة للمساحات السكنية والتجارية.',
                ],
                'seo_keywords' => [
                    'en' => 'flooring, hardwood, laminate, tile, installation, repair',
                    'ar' => 'الأرضيات، خشب صلب، لامينيت، بلاط، تركيب، إصلاح',
                ],
            ],
            [
                'name' => [
                    'en' => 'Roof insulation',
                    'ar' => 'عزل السقف',
                ],
                'body' => [
                    'en' => 'Roof insulation helps regulate indoor temperature and reduces energy consumption.',
                    'ar' => 'يساعد عزل السقف على تنظيم درجة الحرارة الداخلية وتقليل استهلاك الطاقة.',
                ],
                'seo_title' => [
                    'en' => 'Roof Insulation Services',
                    'ar' => 'خدمات عزل السقف',
                ],
                'seo_description' => [
                    'en' => 'We provide professional roof insulation services to improve energy efficiency in buildings.',
                    'ar' => 'نحن نقدم خدمات عزل السقف المحترفة لتحسين كفاءة الطاقة في المباني.',
                ],
                'seo_keywords' => [
                    'en' => 'roof insulation, indoor temperature, energy efficiency, buildings',
                    'ar' => 'عزل السقف، درجة الحرارة الداخلية، كفاءة الطاقة، المباني',
                ],
            ],
            [
                'name' => [
                    'en' => 'Waterways and swimming pools',
                    'ar' => 'الممرات المائية وحمامات السباحة',
                ],
                'body' => [
                    'en' => 'We design and construct waterways and swimming pools for various recreational spaces.',
                    'ar' => 'نقوم بتصميم وإنشاء الممرات المائية وحمامات السباحة لمختلف المساحات الترفيهية.',
                ],
                'seo_title' => [
                    'en' => 'Waterways and Swimming Pools Services',
                    'ar' => 'خدمات الممرات المائية وحمامات السباحة',
                ],
                'seo_description' => [
                    'en' => 'We offer expert services for waterways and swimming pool construction and maintenance.',
                    'ar' => 'نحن نقدم خدمات متخصصة لإنشاء وصيانة الممرات المائية وحمامات السباحة.',
                ],
                'seo_keywords' => [
                    'en' => 'waterways, swimming pools, construction, maintenance, recreational spaces',
                    'ar' => 'الممرات المائية، حمامات السباحة، إنشاء، صيانة، مساحات ترفيهية',
                ],
            ],
            [
                'name' => [
                    'en' => 'Tank insulation',
                    'ar' => 'عزل الخزان',
                ],

                'body' => [
                    'en' => 'Tank insulation helps maintain the temperature of stored liquids and prevents heat loss.',
                    'ar' => 'يساعد عزل الخزان على الحفاظ على درجة حرارة السوائل المخزنة ومنع فقدان الحرارة.',
                ],
                'seo_title' => [
                    'en' => 'Tank Insulation Services',
                    'ar' => 'خدمات عزل الخزان',
                ],
                'seo_description' => [
                    'en' => 'We provide efficient tank insulation services to industries and commercial facilities.',
                    'ar' => 'نحن نقدم خدمات عزل الخزان الفعالة للصناعات والمرافق التجارية.',
                ],
                'seo_keywords' => [
                    'en' => 'tank insulation, stored liquids, heat loss, industries, commercial facilities',
                    'ar' => 'عزل الخزان، السوائل المخزنة، فقدان الحرارة، الصناعات، المرافق التجارية',
                ],
            ],
            [
                'name' => [
                    'en' => 'Floor coating',
                    'ar' => 'طلاء الأرضيات',
                ],

                'body' => [
                    'en' => 'Floor coating enhances the appearance and durability of floors in various settings.',
                    'ar' => 'يعزز طلاء الأرضيات من مظهر ومتانة الأرضيات في مختلف الإعدادات.',
                ],
                'seo_title' => [
                    'en' => 'Floor Coating Services',
                    'ar' => 'خدمات طلاء الأرضيات',
                ],
                'seo_description' => [
                    'en' => 'We offer professional floor coating services for residential and commercial properties.',
                    'ar' => 'نحن نقدم خدمات طلاء الأرضيات المهنية للممتلكات السكنية والتجارية.',
                ],
                'seo_keywords' => [
                    'en' => 'floor coating, appearance, durability, residential, commercial properties',
                    'ar' => 'طلاء الأرضيات، المظهر، المتانة، ممتلكات سكنية، ممتلكات تجارية',
                ],
            ],
        ];

        foreach ($services as $servicesData) {
            $name = json_encode(Arr::only($servicesData['name'], ['en', 'ar']));
            $body = json_encode(Arr::only($servicesData['body'], ['en', 'ar']));
            $seo_title = json_encode(Arr::only($servicesData['seo_title'], ['en', 'ar']));
            $seo_description = json_encode(Arr::only($servicesData['seo_description'], ['en', 'ar']));
            $seo_keywords = json_encode(Arr::only($servicesData['seo_keywords'], ['en', 'ar']));
            $image = 'https://picsum.photos/720.webp';

            $service = Service::create([
                'name' => json_decode($name, true),
                'body' => json_decode($body, true),
                'seo_title' => json_decode($seo_title, true),
                'seo_description' => json_decode($seo_description, true),
                'seo_keywords' => json_decode($seo_keywords, true),
            ]);

            $service->addMediaFromUrl($image)->toMediaCollection('services_main_image');
            $service->addMediaFromUrl($image)->toMediaCollection('services');
            $service->addMediaFromUrl($image)->toMediaCollection('services');
            $service->addMediaFromUrl($image)->toMediaCollection('services');
            $service->addMediaFromUrl($image)->toMediaCollection('services');


        }
    }
}
