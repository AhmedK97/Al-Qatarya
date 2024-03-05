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
            $originPrice = json_decode($service->pivot->details)->originPrice ?? 0;
            $materialsCost += $originPrice * $service->pivot->quantity ?? 0;
        }

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details) ?? 0;
                $materialsCost += $originPrice * $extraService->quantity ?? 0;
            }
        }

        return $materialsCost;
    }

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
            $originPrice = json_decode($service->pivot?->details)->originPrice ?? 0;
            $totalProfit += $originPrice * $service->pivot?->quantity ?? 0;
        }

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details) ?? 0;
                $totalProfit += $originPrice * $extraService->quantity ?? 0;
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

    public function calculateServicesCost($transactions)
    {
        $totalCost = 0;
        foreach ($transactions->project->services as $service) {
            $totalCost += $service->pivot->price * $service->pivot->quantity;
        }

        return $totalCost;
    }

    public function calculateExtraServicesCost($transactions)
    {
        $totalCost = 0;
        foreach ($transactions->project->extraServices as $extraService) {
            $totalCost += $extraService->price * $extraService->quantity;
        }

        return $totalCost;
    }


    public function calculateServicesProfit($transaction)
    {
        $totalProfit = 0;
        foreach ($transaction->project->services as $service) {
            $originPrice = json_decode($service->pivot->details)->originPrice ?? 0;
            $price = $service->pivot->price ?? 0;
            $totalProfit += $price * $service->pivot->quantity - $originPrice * $service->pivot->quantity;
        }



        return $totalProfit;
    }

    public function calculateExtraServiceProfit($transaction)
    {
        $totalProfit = 0;

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details) ?? 0;
                $price = $extraService->price ?? 0;
                $totalProfit += $price * $extraService->quantity - $originPrice * $extraService->quantity;
            }
        }

        return $totalProfit;
    }


    ////////////////////////


    public function calculateAllServicesProfit($transactions)
    {
        $totalProfit = 0;
        foreach ($transactions as $transaction) {
            $totalProfit += $this->calculateServicesProfit($transaction);
        }

        return $totalProfit;
    }

    public function calculateAllExtraServicesProfit($transactions)
    {
        $totalProfit = 0;
        foreach ($transactions as $transaction) {
            $totalProfit += $this->calculateExtraServiceProfit($transaction);
        }

        return $totalProfit;
    }

    public function calculateAllWorkerCost($transactions)
    {
        $totalCost = 0;
        foreach ($transactions as $transaction) {
            $totalCost += $this->calculateWorkerCost($transaction);
        }

        return $totalCost;
    }

    ////////////////////////////////////
    // ما تم دفعه من قبل العميل
    public function calculateTotalPaid($transaction)
    {
        $totalPaid = 0;
        if ($transaction->payments != null) {
            foreach (json_decode($transaction->payments) as $payment) {
                $totalPaid += $payment->amount;
            }
        }


        return $totalPaid;
    }
}
