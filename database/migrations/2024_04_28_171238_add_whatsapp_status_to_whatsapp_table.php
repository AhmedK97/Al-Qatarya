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
        Schema::table('whatsapp', function (Blueprint $table) {
            if (! Schema::hasColumn('whatsapp', 'whatsapp_status')) {
                $table->string('whatsapp_status')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('whatsapp', function (Blueprint $table) {
            //
        });
    }
};
