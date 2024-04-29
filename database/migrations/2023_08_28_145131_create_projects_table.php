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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->json('title')->nullable();
            $table->string('slug');
            $table->date('project_date');
            $table->json('address')->nullable();
            $table->string('space_area')->nullable();
            $table->json('description')->nullable();
            $table->text('notes')->nullable();
            $table->string('cost')->nullable();
            $table->string('status');
            $table->string('company');
            $table->foreignId('employee_id')->nullable()->constrained('users')->onDelete('set null');
            $table->foreignId('customer_id')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
