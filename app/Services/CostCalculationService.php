<?php

namespace App\Services;

class CostCalculationService
{

    public function calculateTotalCost($transactions)
    {
        $totalCost = 0;
        foreach ($transactions->project->services as $service) {
            $totalCost += $service->pivot->price * $service->pivot->quantity;
        }
        foreach ($transactions->project->extraServices as $extraService) {
            $totalCost += $extraService->price * $extraService->quantity;
        }

        return $totalCost;
    }

    public function calculateMaterialsCost($transaction)
    {
        $materialsCost = 0;
        foreach ($transaction->project->services as $service) {
            $originPrice = json_decode($service->pivot->details)->originPrice;
            $materialsCost += $originPrice * $service->pivot->quantity;
        }

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details)->originPrice;
                $materialsCost += $originPrice * $extraService->quantity;
            }
        }

        return $materialsCost;
    }


    // worker
    public function calculateWorkerCost($transaction)
    {
        $workerCost = 0;
        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'worker') {
                foreach (json_decode($extraService->details) as $worker) {
                    $workerCost += $worker->originPrice;
                }
            }
        }

        return $workerCost;
    }

    public function calculateProfit($transaction)
    {
        $totalProfit = 0;
        foreach ($transaction->project->services as $service) {
            $originPrice = json_decode($service->pivot->details)->originPrice;
            $totalProfit += $originPrice * $service->pivot->quantity;
        }

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details)->originPrice;
                $totalProfit += $originPrice * $extraService->quantity;
            }
            if ($extraService->type == 'worker') {
                foreach (json_decode($extraService->details) as $worker) {
                    $totalProfit += $worker->originPrice - $worker->tips - $worker->discount;
                }
            }
        }

        $totalCost = $this->calculateTotalCost($transaction);
        $profit = $totalCost - $totalProfit;

        return $profit;
    }
}
