<?php

namespace App\Http\Resources;

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
                return $this->project->extraServices->map(function ($extraService) {
                    return [
                        'id' => $extraService->id,
                        'name' => $extraService->name,
                        'price' => $extraService->price,
                        'quantity' => $extraService->quantity,
                        'type' => $extraService->type,
                        'details' => json_decode($extraService->details),
                        'created_at' => $extraService->created_at->format('Y-m-d'),
                    ];
                });
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
                return $this->project->services->map(function ($service) {
                    // dd(json_decode($service->pivot->details));
                    return [
                        'id' => $service->id,
                        'name' => $service->name,
                        'price' => $service->pivot->price,
                        'quantity' => $service->pivot->quantity,
                        'details' => [
                            'originPrice' => json_decode($service->pivot->details)->originPrice ?? 0,
                        ],
                        'created_at' => $service->created_at->format('Y-m-d'),
                    ];
                });
            }),
            'payments' => json_decode($this->payments),
            'status' => $this->status,
            'times_to_pay' => $this->times_to_pay,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
