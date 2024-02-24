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
            font-family: DejaVu Sans, sans-serif;
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
    </style>
</head>

<body style="direction: rtl;">
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title" style="display: flex; align-items: center;justify-content: center;">
                                <img src="https://alqataryakw.com/storage/images/logo.webp"
                                    style="width: 100%; max-width: 100px; margin-right: 10px;" />
                                <p style="margin: 0 50 0 50; text-align: center font-size: x-large;">شركه القطرية
                                    للعوازل</p>
                            </td>

                        </tr>
                    </table>
                </td>
            </tr>

            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                Sparksuite, Inc.<br />
                                12345 Sunny Road<br />
                                Sunnyville, CA 12345
                            </td>

                            <td>
                                Acme Corp.<br />
                                John Doe<br />
                                john@example.com
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            {{--
            <tr class="heading">
                <td>الخدمات</td>
                <td>عدد الامتار</td>
                <td>السعر النهائي</td>
            </tr>

            <tr class="details">
                <td>Check</td>

                <td>1000</td>
            </tr>

            <tr class="heading">
                <td>Item</td>

                <td>Price</td>
            </tr>

            <tr class="item">
                <td>Website design</td>

                <td>$300.00</td>
            </tr>

            <tr class="item">
                <td>Hosting (3 months)</td>

                <td>$75.00</td>
            </tr>

            <tr class="item last">
                <td>Domain name (1 year)</td>

                <td>$10.00</td>
            </tr>

            <tr class="total">
                <td></td>

                <td>Total: $385.00</td>
            </tr> --}}
        </table>

        <h1 class="text-center">الخدمات</h1>

        <table>
            <tr class="trHead">
                <th class="text-center">اسم الخدمة</th>
                <th class="text-center">عدد الامتار</th>
                <th class="text-center">سعر المتر</th>
                <th class="text-center">السعر النهائي</th>

            </tr>
            @foreach ($services as $service)
                <tr style="    background: aliceblue;">
                    <td class="text-center">{{ $service->name }}</td> {{-- Display the service name --}}
                    <td class="text-center">{{ $service->pivot->quantity }}</td> {{-- Display the quantity --}}
                    <td class="text-center">{{ $service->pivot->price }}</td> {{-- Display the price per unit --}}
                    <td class="text-center">{{ $service->pivot->quantity * $service->pivot->price }}</td>
                </tr>
            @endforeach
        </table>

        {{-- extraService --}}
        <h1 class="text-center">الخدمات الاضافية</h1>

        <table>
            <tr class="trHead">
                <th class="text-center">اسم الخدمة الاضافية</th>
                <th class="text-center">عدد الامتار</th>
                <th class="text-center">سعر المتر / الكمية</th>
                <th class="text-center">السعر النهائي</th>
            </tr>
            @foreach ($extraServices as $extraService)
                <tr style="    background: aliceblue;">
                    <td class="text-center">{{ $extraService->name }}</td> {{-- Display the service name --}}
                    <td class="text-center">{{ $extraService->price }}</td> {{-- Display the price per unit --}}
                    <td class="text-center">{{ $extraService->quantity }}</td> {{-- Display the quantity --}}
                    <td class="text-center">{{ $extraService->quantity * $extraService->price }}</td>
                </tr>
            @endforeach

    </div>
</body>

</html>
