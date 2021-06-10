
// Async Javascript

// https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&ab_channel=TheNetNinja

// senkron akış
    console.log("işlem 1 gerçekleşti");
    console.log("işlem 2 gerçekleşti");
    console.log("işlem 3 gerçekleşti");
    console.log("işlem 4 gerçekleşti");


/*
    işlem 1 gerçekleşti
    işlem 2 gerçekleşti
    işlem 3 gerçekleşti
    işlem 4 gerçekleşti
*/

// Senkron akışta kod blokları yazıldığı sırayla çalışır


// asenkron akış
    console.log("işlem 1 gerçekleşti");
    console.log("işlem 2 gerçekleşti");

    setTimeout(() => {
        console.log("işlem 3 2 saniye kadar sürdü ama gerçekleşti");
    }, 2000);

    console.log("işlem 4 gerçekleşti");

/*
    işlem 1 gerçekleşti
    işlem 2 gerçekleşti
    işlem 4 gerçekleşti
    işlem 3 2 saniye kadar sürdü ama gerçekleşti
*/

// setTimeout fonksiyonu bir asenkron fonksiyon olduğu için 4 numaralı işlemi bloke etmez
// Ne zaman setTimeout içindeki ifade çalışır daha sonrasında akış içine dahil olur
// Dolayısıyla diğer statementler çalışıp bittikten sonra son sırada çalışır
// Burada eğer setTimeout fonksiyonu içinden dönen bir değere göre çalışan bir fonksiyon kullanılmamalı
// twitter data feed, populating side menus 




// https://jsonplaceholder.typicode.com/ to get some json data 


    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))


/*

    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    }
   
*/


// Aşağıda örnek bir api request için birtakım parametreler gösterilmiştir

/* 

    General:
    Request URL: https://jsonplaceholder.typicode.com/todos/1
    Request Method: GET
    Status Code: 304 
    Remote Address: 172.64.201.15:443
    Referrer Policy: strict-origin-when-cross-origin

    Response Headers:
    access-control-allow-credentials: true
    age: 25553
    cache-control: max-age=43200
    cf-cache-status: HIT
    cf-ray: 62fea564fcf796f8-FRA
    cf-request-id: 08d305b31e000096f829099000000001
    content-encoding: br
    content-type: application/json; charset=utf-8
    date: Sun, 14 Mar 2021 15:48:24 GMT
    etag: W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"
    expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
    expires: -1
    nel: {"report_to":"cf-nel","max_age":604800}
    .
    .
    .

    Request Headers:
    :authority: jsonplaceholder.typicode.com
    :method: GET
    :path: /todos/1
    :scheme: https
    accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,**;q=0.8,application/signed-exchange;v=b3;q=0.9
    accept-encoding: gzip, deflate, br
    accept-language: en-US,en;q=0.9,tr;q=0.8,en-GB;q=0.7,de;q=0.6
    cookie: __cfduid=df809373c761f8e4b15e2cd7f5a56c49c1615736709; _ga_E3C3GCQVBN=GS1.1.1615736731.1.0.1615736731.0; _ga=GA1.1.575606097.1615736731
    if-none-match: W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"
    sec-fetch-dest: document
    sec-fetch-mode: navigate
    sec-fetch-site: none
    sec-fetch-user: ?1
    upgrade-insecure-requests: 1
    user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.54

    Response:
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    }

*/


// geleneksel yöntem
    const request = new XMLHttpRequest();

// request tamamlanıp tamamlanmadığını kontrol etmek için aşağıdaki EventListener'i kullanıyoruz
    request.addEventListener('readystatechange', () => {
        console.log(request, request.readyState);
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

/*

    XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} 1
    XMLHttpRequest {onreadystatechange: null, readyState: 2, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} 2
    XMLHttpRequest {onreadystatechange: null, readyState: 3, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} 3
    XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …} 4

*/


// Bir api çağrısının state bilgileri

/*

    Value	    State	                Description
    0	        UNSENT	                Client has been created. open() not called yet.
    1	        OPENED	                open() has been called.
    2	        HEADERS_RECEIVED	    send() has been called, and headers and status are available.
    3	        LOADING	Downloading;    responseText holds partial data.
    4	        DONE	                The operation is complete.

*/



    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {     // Yani api call tamamlanmışsa
            console.log(request.responseText);
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

/*

    [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        }
    ]

*/


// request.readyState tek başına kontrolü yeterli değil. çünkü api call hatalı bile olsa bu değiken 4 dönebilir
// Örneğin aşağıdaki gibi olmayan bir backende request atılırsa da request.readyState === 4 döner ama status=404
// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
// Dolayısıyla readyState ile birlikte status bilgisinin de kontrolü şart 


    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
        }
        else if (request.readyState === 4){
            console.log("could not fetch the data.");
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();


// Şimdi request atmayı bu şekilde öğrendiğimize göre bundan sonra request tamamlanınca çalışacak callback functionı yazalım
// Ama öncesinde bu kod bloğunu function hale getirelim

    const getDataFromApi = () => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.responseText);
            }
            else if (request.readyState === 4){
                console.log("could not fetch the data.");
            }
        })
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    }

    getDataFromApi();

// Data başarılı bir şekilde döndükten sonra bu datayı işleyecek fonksiyonu da buraya parametre geçelim

    const getDataFromApi = (callBack) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                callBack(undefined, request.responseText);  // çünkü 200 dönerse err yok
            }
            else if (request.readyState === 4){
                callBack("could not fetch data",undefined);  // çünkü !200 dönerse data yok
            }
        })
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    }

    getDataFromApi((err, data) => {
        console.log("callback fired. trying to get the data...");
        //console.log(err, data);
        if (err) {
            console.log(err);
        }
        else{
            console.log(data);
        }
    });


// getDataFromApi fonksiyonu async fonksiyon olarak çalıştığı için bloke etmez

    console.log("işlem 1 gerçekleşti");
    console.log("işlem 2 gerçekleşti");

    getDataFromApi((err, data) => {
        console.log("callback fired. trying to get the data...");
        if (err) {
            console.log(err);
        }
        else{
            console.log(data);
        }
    });

    console.log("işlem 3 gerçekleşti");
    console.log("işlem 4 gerçekleşti");


/*

    işlem 1 gerçekleşti
    işlem 2 gerçekleşti
    işlem 3 gerçekleşti
    işlem 4 gerçekleşti
    callback fired. trying to get the data...
    data ........

*/



// Parsing JSON data 

    const getDataFromApi = (callBack) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);  // Parsing JSON data. Returns array of objects
                callBack(undefined, data);
            }
            else if (request.readyState === 4){
                callBack("could not fetch data",undefined);
            }
        })
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.send();
    }






// diyelim ki js dizini altında kisiler.json diye aşağıdaki içerikte bir dosyamız olsun
    [
        { "name" : "Nury", "job" : "Engineer" },
        { "name" : "Rahym", "job" : "Engineer" }
    ]

// Bu datayı bu şekilde lokalden de çağırıp parse edebiliriz
    request.open('GET', 'js/kisiler.json');




// callBack Hell
// Diyelim data1.json, data2.json ve data3.json adında dosyalarımız olsun
// Sırasıyla 3 dosyanın datasını ekrana basmak istersek:

// 1. Alternatif 
    const getDataFromApi = (resource,callBack) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);  // Parsing JSON data. Returns array of objects
                callBack(undefined, data);
            }
            else if (request.readyState === 4){
                callBack("could not fetch data",undefined);
            }
        })
        request.open('GET', resource);
        request.send();
    }


    getDataFromApi('data1.json', (err, data) => {
        console.log(data);
        getDataFromApi('data2.json',(err, data) => {
            console.log(data);
            getDataFromApi('data3.json',(err, data) => {
                console.log(data);
            });
        });
    });


// Okunurluk ve bakım açısından bu alternatif zor


// 2. Alternatif (Promise)




