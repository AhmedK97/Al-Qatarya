<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// http://alqatarya.test/api/webhook/whatsapp_api_hessin

// Route::post('/webhook/whatsapp_api', function (Request $request) {

//     // save the whole request to a file append
//     // Storage::disk('local')->append('whatsapp_api_hessin.txt', json_encode($request->all()));
//     dd($request->all());

//     return response()->json([
//         'status' => 'success',
//         'message' => 'webhook received'
//     ]);
// });
