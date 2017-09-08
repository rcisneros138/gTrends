
var QPXClient = require('qpx-client'),
util = require('util'),

options = {
    key: 'AIzaSyDV9GYXLGidkykpNW-iNRhgnEDGIcj9oek',
    timeout: 15000
},

searchConfig = {
    body: {
        "request": {
            "passengers": {
                "adultCount": 1
            },
            "slice": [
                {
                    "origin": "SFO",
                    "destination": "LAX",
                    "date": "2017-09-19"
                }
            ],
            "solutions": 1,
            "saleCountry": "DE"
            
        }
    }
},

qpxClient = new QPXClient(options);

qpxClient.search(searchConfig, function (err, data) {
console.log('\n-------------search-------------');
console.log();
if (err) {
    console.log('ERROR: qpxClient.search: ' + err);
} else {
    console.log(util.inspect(data, { depth : 8 }));
}
});