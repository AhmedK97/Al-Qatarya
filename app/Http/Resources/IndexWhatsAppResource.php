<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexWhatsAppResource extends JsonResource
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
            'instance_name' => $this->instance_name,
            'Status' => $this->Status,
            'type' => $this->type,
            'ownerJid' => $this->ownerJid,
            'created_at' => $this->created_at->format('H:i:s Y-m-d'),
        ];
    }
}
