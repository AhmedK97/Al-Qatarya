<?php

namespace Database\Factories;

use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //  1 - this will relate to the user who made the transaction (customer)
            //  2 - this will relate to the user who received the transaction (employee)
            //  3 - service id
            //  4 - full price
            //  5 - how many times customer will pay to achieve the full price (will create another table for this)
            //  6 - payments (payments table)
            //  * 1 - main payment (from the full price)
            //  * 2 - extra payment (if there is any)
            //  * 3 - water container payment(if there is any)

            // customer_id user where role = customer
            // employee_id user where role = employee
            // service_id random service
            // full_price random number
            // times_to_pay random number (1-6)

            // 'customer_id' => user where role = customer
            // 'employee_id' => user where role = employee
            // 'service_id' => random service
            // 'full_price' => random number
            // 'times_to_pay' => random number (1-6)

            // payments table
            // --- create payments based on times_to_pay
            // --- add or create extra payment on payments table
            // --- add or make empty water container payment on payments table

            'customer_id' => User::factory()->customer()->create()->id,
            'employee_id' => User::factory()->employee()->create()->id,
            'service_id' => $this->faker->randomElement(Service::all()->pluck('id')->toArray()),
            'full_price' => $this->faker->numberBetween(1000, 10000),
            'times_to_pay' => $this->faker->numberBetween(1, 6),

            // we will create payments based on times_to_pay
            // we will add or create extra payment on payments table
            // we will add or make empty water container payment on payments table

        ];
    }
}
