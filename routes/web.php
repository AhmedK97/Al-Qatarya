<?php

use App\Http\Controllers\aboutController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeleteCustomersAdminController;
use App\Http\Controllers\DeleteEmployeesAdminController;
use App\Http\Controllers\DeleteProjectsAdminController;
use App\Http\Controllers\DeleteServicesAdminController;
use App\Http\Controllers\ExportCustomersAdminController;
use App\Http\Controllers\ExportEmployeesAdminController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IndexBlogController;
use App\Http\Controllers\IndexContactUsController;
use App\Http\Controllers\IndexCustomersAdminController;
use App\Http\Controllers\IndexEmployeesAdminController;
use App\Http\Controllers\IndexProjectsAdminController;
use App\Http\Controllers\IndexProjectsController;
use App\Http\Controllers\IndexServicesAdminController;
use App\Http\Controllers\IndexServicesController;
use App\Http\Controllers\ProjectUploadMediaController;
use App\Http\Controllers\ShowBlogController;
use App\Http\Controllers\ShowProjectsController;
use App\Http\Controllers\ShowServiceController;
use App\Http\Controllers\StoreCustomersAdminController;
use App\Http\Controllers\StoreEmployeesAdminController;
use App\Http\Controllers\StoreProjectsAdminController;
use App\Http\Controllers\StoreServicesAdminController;
use App\Http\Controllers\UpdateCustomersAdminController;
use App\Http\Controllers\UpdateEmployeesAdminController;
use App\Http\Controllers\UpdateProjectsAdminController;
use App\Http\Controllers\UpdateServicesAdminController;
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

// -------------------------- Admin ----------------------------

// prefex admin group
Route::prefix('/admin')->group(function () {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    //--------------- Employees -----------------//
    Route::get('/employees', IndexEmployeesAdminController::class)->name('index.employees');

    Route::post('/employees', StoreEmployeesAdminController::class)->name('store.employees');

    Route::Put('employees/{user}', UpdateEmployeesAdminController::class)->name('update.employees');

    Route::delete('employees/{user}', DeleteEmployeesAdminController::class)->name('delete.employees');

    Route::get('/employees/export', ExportEmployeesAdminController::class)->name('export.employees');

    //--------------- Employees -----------------//
    Route::get('/customers', IndexCustomersAdminController::class)->name('index.customers');

    Route::post('/customers', StoreCustomersAdminController::class)->name('store.customers');

    Route::Put('customers/{user}', UpdateCustomersAdminController::class)->name('update.customers');

    Route::delete('customers/{user}', DeleteCustomersAdminController::class)->name('delete.customers');

    Route::get('/customers/export', ExportCustomersAdminController::class)->name('export.customers');

    // --------------- Projects -----------------//
    Route::get('/projects', IndexProjectsAdminController::class)->name('index.projects');

    Route::post('/projects', StoreProjectsAdminController::class)->name('store.projects');

    Route::put('/projects/{project}', UpdateProjectsAdminController::class)->name('update.projects');

    Route::delete('/projects/{project}', DeleteProjectsAdminController::class)->name('delete.projects');

    Route::post('/projects/{project}/uploadMedia', ProjectUploadMediaController::class)->name('uploadMedia.projects');

    // --------------- Services -----------------//
    Route::get('services', IndexServicesAdminController::class)->name('index.services');

    Route::post('services', StoreServicesAdminController::class)->name('store.services');

    Route::put('services/{service}', UpdateServicesAdminController::class)->name('update.services');

    Route::delete('services/{service}', DeleteServicesAdminController::class)->name('delete.services');

});
