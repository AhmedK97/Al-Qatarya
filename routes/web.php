<?php

use App\Http\Controllers\aboutController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\getWhatsappClientChatMessages;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexBlogController;
use App\Http\Controllers\IndexContactUsController;
use App\Http\Controllers\IndexProjectsController;
use App\Http\Controllers\IndexServicesController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowProjectsController;
use App\Http\Controllers\ShowServiceController;
use App\Http\Controllers\WatsappMessageController;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// send whatsapp message
Route::get('/send', WatsappMessageController::class)->name('send.message');

Route::get('/', HomeController::class)->name('home');

Route::get('/services', IndexServicesController::class)->name('services');

Route::get('/about', aboutController::class)->name('about');

Route::get('/faq', FaqController::class)->name('show.faq');

Route::get('/blogs', IndexBlogController::class)->name('blogs');

Route::get('/projects', IndexProjectsController::class)->name('projects');

Route::get('/contact-us', IndexContactUsController::class)->name('show.contact');

Route::get('/services/{slug}', ShowServiceController::class)->name('service');

Route::get('/blogs/{slug}', ShowBlogController::class)->name('show.blogs');

Route::get('/projects/{slug}', ShowProjectsController::class)->name('show.projects');

// send whatsapp message



// Route::get('/send', function () {

//     $response = Http::withHeaders([
//         'Authorization' => 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0YW5jZU5hbWUiOiJjb2RlY2hhdC1ib3QiLCJhcGlOYW1lIjoid2hhdHNhcHAtYXBpIiwidG9rZW5JZCI6IjM3NTNmNzAwLTNjZGMtNDMxMi1hZGRmLWI0NjA0ZTQ3ZDgwZiIsImlhdCI6MTcwODI4ODkxMiwiZXhwIjoxNzA4Mjg4OTEyLCJzdWIiOiJnLXQifQ.k6foHEseZc14c8j4dUP8BO7nmAgAgnzL6V0COdKD3HQ',
//     ])->post('http://localhost:8084/chat/findMessages/codechat-bot', [
//         'where' => [
//             'keyRemoteJid' => '201122061032@s.whatsapp.net',
//         ],
//         'offset' => 20,
//         'page' => 1,
//     ]);

//     return $response->body();
// })->name('send.message');
