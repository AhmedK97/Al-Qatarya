<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EmployeeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=> $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone ?? 'N/A',
            'address' => $this->address ?? 'N/A',
            'status' => $this->status ??'N/A',
            'about' => $this->about ?? 'N/A',
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
