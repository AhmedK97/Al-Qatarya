<?php

namespace App\Services;

class CalculationService
{
    public function calculateTotalServicesCost($transactions)
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
        $materialsServiceCost = 0;
        $materialsExtraServiceCost = 0;

        foreach ($transaction->project->services as $service) {
            // if (is_null( json_decode($service->pivot->details))) {
            //     return 0;
            // }
            $totalOriginPrice = json_decode($service->pivot->details) ? json_decode($service->pivot->details) : [];
            $sumOriginPrice = 0;
            foreach ($totalOriginPrice as $price) {
                $sumOriginPrice += $price->originPrice;
            }
            $materialsServiceCost += $sumOriginPrice * $service->pivot->quantity;
        }

        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'service') {
                $originPrice = json_decode($extraService->details) ? json_decode($extraService->details) : [];
                $sumOriginPrice = 0;
                foreach ($originPrice as $price) {
                    $sumOriginPrice += $price->originPrice;
                }
                $materialsExtraServiceCost += $sumOriginPrice * $extraService->quantity;
            }
        }
        $materialsCost = $materialsServiceCost + $materialsExtraServiceCost;

        return $materialsCost;
    }

    public function calculateWorkerCost($transaction)
    {
        $workerCost = 0;
        foreach ($transaction->project->extraServices as $extraService) {
            if ($extraService->type == 'worker') {
                foreach (json_decode($extraService->details) as $worker) {
                    $workerCost += intval($worker->originPrice) + intval($worker->tips) - intval($worker->discount);
                }
            }
        }

        return $workerCost;
    }

    public function calculateProfit($transaction)
    {
        $totalProfit = 0;

        $totalMaterialsCost = $this->calculateMaterialsCost($transaction);

        $totalWorkerCost = $this->calculateWorkerCost($transaction);

        $totalCost = $totalMaterialsCost + $totalWorkerCost;

        $totalPaid = $this->calculateTotalPaid($transaction);

        $totalProfit = $totalPaid - $totalCost;

        return $totalProfit;
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
            // if originPrice is not set, return 0
            if (! json_decode($service->pivot->details)) {
                return 0;
            }
            $totalOriginPrice = 0;
            foreach (json_decode($service->pivot->details) as $price) {
                $totalOriginPrice += $price->originPrice;
            }
            $originPrice = $totalOriginPrice ? $totalOriginPrice : 0;
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
                if (! json_decode($extraService->details)) {
                    return 0;
                }
                $originPrice = json_decode($extraService->details) ? json_decode($extraService->details) : 0;
                $price = $extraService->price ?? 0;
                $sumOriginPrice = 0;
                foreach ($originPrice as $price) {
                    $sumOriginPrice += $price->originPrice;
                }
                $totalProfit += intval($extraService->price) * $extraService->quantity - $sumOriginPrice * $extraService->quantity;
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
