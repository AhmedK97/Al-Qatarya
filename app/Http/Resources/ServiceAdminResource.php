<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceAdminResource extends JsonResource
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
            'company_name' => $this->company_name,
            'additional_info' => json_decode($this->additional_info),
            'is_used' => $this->projects()->exists(),
            'lang' => $this->lang,
            'created_at' => $this->created_at,
        ];
    }
}
