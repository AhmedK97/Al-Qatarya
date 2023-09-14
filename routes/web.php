<?php

use App\Http\Controllers\aboutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexBlogController;
use App\Http\Controllers\IndexContactUsController;
use App\Http\Controllers\IndexProjectsController;
use App\Http\Controllers\IndexServicesController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowProjectsController;
use App\Http\Controllers\ShowServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/services', IndexServicesController::class)->name('services');

Route::get('/about', aboutController::class)->name('about');

Route::get('/faq', FaqController::class)->name('show.faq');

Route::get('/blogs', IndexBlogController::class)->name('blogs');

Route::get('/projects', IndexProjectsController::class)->name('projects');

Route::get('/contact-us', IndexContactUsController::class)->name('show.contact');

// dashboard routes
Route::get('/dashboard', DashboardController::class)->name('dashboard');

Route::get('/services/{slug}', ShowServiceController::class)->name('service');

Route::get('/blogs/{slug}', ShowBlogController::class)->name('show.blogs');

Route::get('/projects/{slug}', ShowProjectsController::class)->name('show.projects');

// To do show all services in one page
