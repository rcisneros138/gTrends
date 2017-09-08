var googleTrends = require('google-trends-api');
var fileSystem = require('fs');
var util = require('util');

// googleTrends.interestOverTime({ keyword: '' })
// .then(function(results){
//     console.log("Results: ", results);
// });

// var month_begin = new Date('March 1, 2015');
// var month_end = new Date('March 29, 2015');

// googleTrends.relatedQueries({ keyword: ['vacation','vegas'] })
// .then(function(results){
//      console.log("Results related: ", results);
// });

googleTrends.interestOverTime({
    keyword: ['Valentines Day', 'vacation'],
    startTime: new Date('January 1, 2016')
})
.then((res) => {
    var resJson = JSON.parse(res);
    var timelineData = resJson.default.timelineData;
    // console.log(resJson.default.timelineData);

    for (var key in timelineData){
        if (timelineData.hasOwnProperty(key)){
            console.log(timelineData[key].value[0]);
            console.log(timelineData[key].value[1]);
            console.log("----");
        }
    }

    // console.log(util.inspect(res, { depth : 8 }));
})
.catch((err) => {
  console.log('got the error', err);
  console.log('error message', err.message);
  console.log('request body',  err.requestBody);
});