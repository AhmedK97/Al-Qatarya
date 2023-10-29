<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectAdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required','string','max:255'],
            'company' => ['required','string','max:255'],
            'customer' => ['nullable','string','exists:users,name'],
            'employee' => ['nullable','string','exists:users,name'],
            'space_area' => ['required','string','max:255'],
            'status' => ['required','string','max:255'],
            'project_date' => ['required','date'],
            'address' => ['required','string','max:255'],
            'notes' => ['nullable','string','max:255'],
        ];
    }
}
