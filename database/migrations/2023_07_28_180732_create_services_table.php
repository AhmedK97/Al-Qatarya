<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lang')->nullable();
            $table->string('company_name')->nullable();
            $table->json('additional_info')->nullable();
            $table->string('slug');
            // $table->json('body')->nullable();
            // $table->json('seo_title')->nullable();
            // $table->json('seo_description')->nullable();
            // $table->json('seo_keywords')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
