<?php

use App\Http\Controllers\aboutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeleteCustomersController;
use App\Http\Controllers\DeleteEmployeesController;
use App\Http\Controllers\ExportCustomersController;
use App\Http\Controllers\ExportEmployeesController;
use App\Http\Controllers\IndexEmployeesController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexBlogController;
use App\Http\Controllers\IndexContactUsController;
use App\Http\Controllers\IndexCustomersController;
use App\Http\Controllers\IndexProjectsController;
use App\Http\Controllers\IndexServicesController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowProjectsController;
use App\Http\Controllers\ShowServiceController;
use App\Http\Controllers\StoreCustomersController;
use App\Http\Controllers\StoreEmployeesController;
use App\Http\Controllers\UpdateCustomersController;
use App\Http\Controllers\UpdateEmployeesController;
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

Route::get('/services', IndexServicesController::class)->name('services');

Route::get('/about', aboutController::class)->name('about');

Route::get('/faq', FaqController::class)->name('show.faq');

Route::get('/blogs', IndexBlogController::class)->name('blogs');

Route::get('/projects', IndexProjectsController::class)->name('projects');

Route::get('/contact-us', IndexContactUsController::class)->name('show.contact');

Route::get('/services/{slug}', ShowServiceController::class)->name('service');

Route::get('/blogs/{slug}', ShowBlogController::class)->name('show.blogs');

Route::get('/projects/{slug}', ShowProjectsController::class)->name('show.projects');

// Admin Routes
Route::get('/dashboard', DashboardController::class)->name('dashboard');

//--------------- Employees -----------------//
Route::get('/employees', IndexEmployeesController::class)->name('index.employees');

Route::post('/employees', StoreEmployeesController::class)->name('store.employees');

Route::Put('employees/{user}', UpdateEmployeesController::class)->name('update.employees');

Route::delete('employees/{user}', DeleteEmployeesController::class)->name('delete.employees');

Route::get('/customers/export', ExportEmployeesController::class)->name('export.employees');

//--------------- Employees -----------------//
Route::get('/customers', IndexCustomersController::class)->name('index.customers');

Route::post('/customers', StoreCustomersController::class)->name('store.customers');

Route::Put('customers/{user}', UpdateCustomersController::class)->name('update.customers');

Route::delete('customers/{user}', DeleteCustomersController::class)->name('delete.customers');

Route::get('/customers/export', ExportCustomersController::class)->name('export.customers');
