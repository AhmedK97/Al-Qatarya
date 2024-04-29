<!DOCTYPE html>
<html lang="ar">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>A simple, clean, and responsive HTML invoice template</title>

    <style>
        * {
            font-family: DejaVu Sans, sans-serif !important;
        }

        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
            font-size: 16px;
            line-height: 24px;
            /* font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; */
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 5px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 45px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 20px;
        }

        .invoice-box table tr.item td {
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .invoice-box.rtl {
            direction: rtl;
            /* font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; */
        }

        .invoice-box.rtl table {
            text-align: right;
        }

        .invoice-box.rtl table tr td:nth-child(2) {
            text-align: left;
        }

        .text-center {
            text-align: center !important;
        }

        .trHead {
            background: black !important;
            color: white !important;
        }

        .clearfix:after {
            content: "";
            display: table;
            clear: both;
        }

        a {
            color: #5D6975;
            text-decoration: underline;
        }

        /* body {
            position: relative;
            width: 21cm;
            height: 29.7cm;
            margin: 0 auto;
            color: #001028;
            background: #FFFFFF;
            font-family: Arial, sans-serif;
            font-size: 12px;
            font-family: Arial;
        } */

        header {
            padding: 10px 0;
            margin-bottom: 30px;
        }

        #logo {
            text-align: center;
            margin-bottom: 10px;
        }

        #logo img {
            width: 90px;
        }

        h1 {
            border-top: 1px solid #5D6975;
            border-bottom: 1px solid #5D6975;
            color: #5D6975;
            font-size: 2.4em;
            line-height: 1.4em;
            font-weight: normal;
            text-align: center;
            margin: 0 0 20px 0;
            background: url('https://s3-eu-west-1.amazonaws.com/htmlpdfapi.production/free_html5_invoice_templates/example1/dimension.png');
        }

        #project {
            float: left;
        }

        #project span {
            color: #5D6975;
            text-align: right;
            width: 52px;
            margin-right: 10px;
            /* display: inline-block; */
            font-size: 0.8em;
        }

        #company {
            float: right;
            text-align: right;
        }

        #project div,
        #company div {
            white-space: nowrap;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
            margin-bottom: 20px;
        }

        table tr:nth-child(2n-1) td {
            background: #F5F5F5;
        }

        table th,
        table td {
            text-align: center;
        }

        table th {
            padding: 5px 20px;
            color: #5D6975;
            border-bottom: 1px solid #C1CED9;
            white-space: nowrap;
            font-weight: normal;
        }

        table .service,
        table .desc {
            text-align: left;
        }

        table td {
            padding: 20px;
            text-align: right;
        }

        table td.service,
        table td.desc {
            vertical-align: top;
        }

        table td.unit,
        table td.qty,
        table td.total {
            font-size: 1.2em;
        }

        table td.grand {
            border-top: 1px solid #5D6975;
            ;
        }

        #notices .notice {
            color: #5D6975;
            font-size: 1.2em;
        }

        footer {
            color: #5D6975;
            width: 100%;
            height: 30px;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #C1CED9;
            padding: 8px 0;
            text-align: center;
        }

        .logo {
            border-radius: 900%;
        }

        .company-name {
            font-size: 1.2em;
            font-weight: bold;
        }

        .text-bold {
            font-weight: bold;
        }

        .center-table {
            font-size: 1.2em;
            text-align: center !important;
        }

        td {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        th {
            padding: 0 !important;
        }

        .paddint-left-right {
            padding-left: 2px !important;
            padding-right: 2px !important;
        }
    </style>
</head>

<body style="direction: rtl;">
    <header class="clearfix">
        <div id="logo">
            <img class="logo" src="https://alqataryakw.com/storage/images/logo.webp" alt="Logo">
        </div>
        <h1>فاتورة رقم #{{ $transactions->first()->id }}</h1>
        <div id="company" class="clearfix">
            <div class="company-name">شـــركة القطــرية للــعوازل</div>
            <div>455 Foggy Heights,<br /> AZ 85004, US</div>
            <div>(602) 519-0450</div>
            <div><a href="https://alqataryakw.com">www.alqataryakw.com</a></div>
        </div>
        <div id="project">
            <div> <span class="text-bold paddint-left-right"> : مشروع
                </span> <br />
                <p>{{ $transactions->first()->project->title }}</p>
            </div>
            <div> <span class="text-bold paddint-left-right"> :
                    العــميل</span> <br />
                <p>{{ $transactions->first()->project->customer->name }}</p>
            </div>
            <div> <span class="text-bold paddint-left-right"> :
                    العــنوان</span>
                <p style="max-width: 200px;">{{ $transactions->first()->project->customer->address }}</p>
            </div>
            <div> <span class="text-bold paddint-left-right"> : تـاريــخ
                    اليوم</span> <br /> {{ now()->format('Y/m/d') }} </div>
        </div>
        </div>
    </header>
    <main>

        <h1>
            <span>الخدمات</span>
        </h1>
        <table>
            <thead>
                <tr>
                    <th class="center-table text-bold desc">السعر </th>
                    <th class="center-table text-bold service">اسم الخدمة</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalService = 0;
                    $totalExtraService = 0;
                @endphp
                @foreach ($services as $service)
                    <tr>
                        <td class="center-table unit"><span>دينار</span>
                            {{ $service->pivot->price * $service->pivot->quantity }}
                        </td>
                        <td class="center-table service">{{ $service->name }}</td>
                        @php $totalService += $service->pivot->price * $service->pivot->quantity; @endphp
                    </tr>
                @endforeach

                @foreach ($extraServices as $extraService)
                    <tr>
                        <td class="center-table unit"><span>دينار</span>
                            {{ $extraService->price * $extraService->quantity }}
                        </td>
                        <td class="center-table service">{{ $extraService->name }}</td>

                        @php $totalExtraService += $extraService->price * $extraService->quantity; @endphp
                    </tr>
                @endforeach
        </table>

        <br>
        <br>
        <br>

        <h1>
            <span>
                المدفوعات * {{ $transactions->times_to_pay }} *
            </span>
        </h1>

        @php
            $totalPaid = 0;
            $payments = $transactions;
        @endphp

        @php
            $paymentsArray = json_decode($payments->payments, true);
        @endphp

        <table>
            <thead>
                <tr>
                    <th class="center-table text-bold service">تاريح الدفع</th>
                    <th class="center-table text-bold service">باقي</th>
                    <th class="center-table text-bold desc">من اصل</th>
                    <th class="center-table text-bold">المدفوع</th>
                </tr>
            </thead>

            <tbody>
                @foreach ($paymentsArray as $payment)
                    <tr>
                        @if ($payment['amount'] != 0)
                        <td  class="center-table">{{ $payment['date'] }}</td>
                        @else
                        <td  class="center-table">-</td>
                        @endif

                        <td class="center-table"><span>دينار</span> {{ ($totalService + $totalExtraService) * ( $payment['percentage'] / 100 ) - $payment['amount'] }}</td>
                        <td class="center-table"><span>دينار</span> {{( $totalService + $totalExtraService) * ( $payment['percentage'] / 100 ) }}</td>
                        <td class="center-table"><span>دينار</span> {{ $payment['amount'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <br><br><br><br>

        <h1>
            <span>الحساب النهائي</span>
        </h1>
        <table>
            <tr>
                <td class="center-table"><span>دينار</span> {{ $totalService + $totalExtraService }}</td>
                <td class="center-table">اجمالى الخدمات</td>
            </tr>
            <tr>
                <td class="center-table"><span>دينار</span> {{ collect($paymentsArray)->sum('amount') }}</td>
                <td class="center-table">اجمالى المدفوع</td>
            <tr>
                <td class="center-table"><span>دينار</span> {{ ($totalService + $totalExtraService) - collect($paymentsArray)->sum('amount') }}</td>
                <td class="center-table">اجمالى الباقي</td>
            </tr>
        </table>
    </main>
</body>

</html>
