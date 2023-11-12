<?php

namespace Database\Factories;

use App\Enums\Blogs\EmployeeStatusEnum;
use App\Enums\Blogs\UserRoleEnum;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            // 'email' => $this->faker->unique()->safeEmail(),
            // 'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'phone' => $this->faker->phoneNumber(),
            'status' => $this->faker->randomElement(EmployeeStatusEnum::cases()),
            'address' => $this->faker->address(),
            'about' => $this->faker->paragraph(),
            'role' => $this->faker->randomElement(UserRoleEnum::cases()),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }

    public function customer(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => UserRoleEnum::CUSTOMER->value,
            ];
        });
    }

    public function employee(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'role' => UserRoleEnum::EMPLOYEE->value,
            ];
        });
    }

    /**
     * Indicate that the user should have a personal team.
     */
}
