<?php

namespace App\Http\Resources;

use App\Services\CalculationService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionsAdminResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $costCalculationService = resolve(CalculationService::class);

        $allServicesCost = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateTotalServicesCost($this->resource);
        });

        $materialsCost = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateMaterialsCost($this->resource);
        });

        $profit = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateProfit($this->resource);
        });

        $workerCost = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateWorkerCost($this->resource);
        });

        $servicesCost = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateServicesCost($this->resource);
        });

        $extraServicesCost = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateExtraServicesCost($this->resource);
        });

        $ServiceProfit = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateServicesProfit($this->resource);
        });

        $ExtraServiceProfit = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateExtraServiceProfit($this->resource);
        });

        $totalPaid = $this->whenLoaded('project', function () use ($costCalculationService) {
            return $costCalculationService->calculateTotalPaid($this->resource);
        });

        return [
            'id' => $this->id,
            'customer' => $this->whenLoaded('project', function () {
                return [
                    'id' => $this->project->customer->id,
                    'name' => $this->project->customer->name,
                    'phone' => $this->project->customer->phone,
                ];
            }),

            'extra_services' => $this->whenLoaded('project', function () {
                return extraServicesResource::collection($this->project->extraServices);
            }),

            'employee' => $this->whenLoaded('project', function () {
                return [
                    'id' => $this->project->employee->id,
                    'name' => $this->project->employee->name,
                    'phone' => $this->project->employee->phone,
                ];
            }),

            'project' => $this->whenLoaded('project', function () {
                return [
                    'id' => $this->project->id,
                    'title' => $this->project->title,
                ];
            }),

            'address' => $this->whenLoaded('project', function () {
                return [
                    'address' => $this->project->address,
                ];
            }),

            'services' => $this->whenLoaded('project', function () {
                return ServicesResource::collection($this->project->services);
            }),
            'payments' => json_decode($this->payments),
            'total_paid' => $totalPaid,
            'status' => $this->status,
            'times_to_pay' => $this->times_to_pay,
            'all_services_cost' => $allServicesCost,
            'materials_cost' => $materialsCost,
            'worker_cost' => $workerCost,
            'services_cost' => $servicesCost,
            'extra_services_cost' => $extraServicesCost,
            'service_profit' => $ServiceProfit,
            'extra_service_profit' => $ExtraServiceProfit,
            'profit' => $profit,

            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
