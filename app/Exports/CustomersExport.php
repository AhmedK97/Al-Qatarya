<?php

namespace App\Exports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CustomersExport implements FromCollection, WithHeadings, WithMapping
{
    public function headings(): array
    {
        return ['ID', 'Name', 'Email', 'Phone', 'Status', 'About', 'Created At'];
    }

    public function map($user): array
    {
        return [$user->id, $user->name, $user->email, $user->phone, $user->status, $user->about, $user->created_at];
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return User::customers()->get();
    }
}
