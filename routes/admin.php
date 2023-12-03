<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DeleteCustomersAdminController;
use App\Http\Controllers\DeleteEmployeesAdminController;
use App\Http\Controllers\DeleteProjectsAdminController;
use App\Http\Controllers\DeleteServicesAdminController;
use App\Http\Controllers\DeleteTransactionsController;
use App\Http\Controllers\ExportCustomersAdminController;
use App\Http\Controllers\ExportEmployeesAdminController;
use App\Http\Controllers\IndexCustomersAdminController;
use App\Http\Controllers\IndexEmployeesAdminController;
use App\Http\Controllers\IndexProjectsAdminController;
use App\Http\Controllers\IndexServicesAdminController;
use App\Http\Controllers\IndexTransactionsController;
use App\Http\Controllers\PaymentTransactionsController;
use App\Http\Controllers\ProjectServiceController;
use App\Http\Controllers\ProjectUploadMediaController;
use App\Http\Controllers\StoreCustomersAdminController;
use App\Http\Controllers\StoreEmployeesAdminController;
use App\Http\Controllers\StoreProjectsAdminController;
use App\Http\Controllers\StoreServicesAdminController;
use App\Http\Controllers\StoreTransactionsController;
use App\Http\Controllers\UpdateCustomersAdminController;
use App\Http\Controllers\UpdateEmployeesAdminController;
use App\Http\Controllers\UpdateProjectsAdminController;
use App\Http\Controllers\UpdateServicesAdminController;
use App\Http\Controllers\UpdateTransactionsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register admin routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "admin" middleware group. Now create something great!
|
*/
// send whatsapp message
// prefix admin group

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
Route::get('/services', IndexServicesAdminController::class)->name('index.services');

Route::post('/services', StoreServicesAdminController::class)->name('store.services');

Route::post('/services/{service}', UpdateServicesAdminController::class)->name('update.services');

Route::delete('/services/{service}', DeleteServicesAdminController::class)->name('delete.services');

// --------------- Transaction -----------------//

Route::get('/transactions', IndexTransactionsController::class)->name('index.transactions');

Route::post('/transactions', StoreTransactionsController::class)->name('store.transactions');

Route::put('/transactions/{transaction}', UpdateTransactionsController::class)->name('update.transactions');

Route::delete('/transactions/{transaction}', DeleteTransactionsController::class)->name('delete.transactions');

Route::post('/transactions/{transaction}/payments', PaymentTransactionsController::class)->name('store.payments.transactions');

// --------------- service transaction -----------------//

Route::post('/service/{project}', ProjectServiceController::class)->name('store.service.transactions');
