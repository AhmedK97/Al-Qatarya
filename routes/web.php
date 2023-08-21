<?php

use App\Http\Controllers\aboutController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexBlogController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowServiceController;
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

Route::get('/', HomeController::class)->name('home');

Route::get('/about', aboutController::class)->name('about');

Route::get('/faq' , FaqController::class)->name('show.faq');

Route::get('/blogs', IndexBlogController::class)->name('blogs');

Route::get('/{slug}' , ShowServiceController::class)->name('service');


Route::get('/blogs/{slug}' , ShowBlogController::class)->name('show.blogs');



// To do show all services in one page

