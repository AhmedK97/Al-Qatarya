<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WatsappMessageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $phone = '201126110083';
        $curl = curl_init();
        curl_setopt_array($curl, [
            CURLOPT_URL => 'https://graph.facebook.com/v15.0/100347906456123/messages',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>
                '{
            "messaging_product": "whatsapp",
            "to": ' .
                $phone .
                ',
            "type": "template",
            "template": {
                "name": "hello_world",
                "language": {
                    "code": "en_US"
                }
            }
        }',
            CURLOPT_HTTPHEADER => ['Authorization:Bearer EAAMFl20srx0BOZBVuQemlLS3OfrxwU8j1ACQQgMxhZBe3T9q4o86AQu0n2pvewai0aWHyMMPh37pHrny4wc15MPyqVb2St3p8JjZC0a7U8iw0rEnbr8Qiggdb0x6TZCUEIy4bfoAwj4vaUzqIZBQ89JCQ7oOOGEgHypuGpW3QuhZBKRueZAlJZBZBL6RfvsrhASokjZAQ9biw2XbV2XzshHS5Eq9QaJpWYTxYZCOC0ZD', 'Content-Type: application/json'],
        ]);

        // curl -i -X POST `
        // https://graph.facebook.com/v17.0/100347906456123/messages `
        // -H 'Authorization: Bearer EAAMFl20srx0BOZBVuQemlLS3OfrxwU8j1ACQQgMxhZBe3T9q4o86AQu0n2pvewai0aWHyMMPh37pHrny4wc15MPyqVb2St3p8JjZC0a7U8iw0rEnbr8Qiggdb0x6TZCUEIy4bfoAwj4vaUzqIZBQ89JCQ7oOOGEgHypuGpW3QuhZBKRueZAlJZBZBL6RfvsrhASokjZAQ9biw2XbV2XzshHS5Eq9QaJpWYTxYZCOC0ZD' `
        // -H 'Content-Type: application/json' `
        // -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"201126110083\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'

        $response = curl_exec($curl);

        curl_close($curl);

        echo $response;
    }
}
