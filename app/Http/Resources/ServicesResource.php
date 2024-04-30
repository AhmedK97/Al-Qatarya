<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServicesResource extends JsonResource
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
            'name' => $this->name,
            'price' => $this->pivot->price,
            'quantity' => $this->pivot->quantity,
            'details' => json_decode($this->pivot->details),
            'created_at' => $this->created_at->format('Y-m-d'),
        ];
    }
}
