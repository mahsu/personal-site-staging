var csv = require('csvtojson');
var fs = require('fs');
var async = require('async');

var inputFolder = "../data/raw/";
var outputPath = "../data/aggregated/delay.csv";

var files = [];
for (var i = 1; i < 13; i++) {
    if (i > 9) {
        files.push(i + "_ontime.csv");
    }
    else files.push("0" + i + "_ontime.csv");
}

var startTime = new Date();

var outputStream = fs.createWriteStream(outputPath);
outputStream.write("year,quarter,month,airline,carrier_cd,num_cd\n");
outputStream.end();
outputStream.on('finish', function() {
    outputStream.close();
    processFiles(function () {
        let endTime = new Date();
        console.log("Finished in " + (endTime - startTime) / 1000 + "s");
    });
});




function processFiles(callback) {
    console.log("Beginning processing");
    async.eachSeries(files, processData, callback);
}

function processData(inputfile, done) {
    var inputPath = inputFolder + inputfile;
    console.log(inputPath);
    console.log(outputPath);
    var fileStream = fs.createReadStream(inputPath);
    var outputStream = fs.createWriteStream(outputPath, {'flags': 'a'});

    var airlineCounts = new Map(); //<airline id, {time,n}>
    var month = 0;
    var quarter = 0;
    var year = 0;
    var totalCD = {time: 0, n: 0};

    outputStream.once("open", function (fd) {
        csv()
            .fromStream(fileStream)
            .on('json', (res) => {
                month = res["MONTH"];
                quarter = res["QUARTER"];
                year = res["YEAR"];
                //do preprocessing here
                var carrierCD = {time: 0, n: 0};


                var airlineID = res["AIRLINE_ID"];

                if (airlineCounts.has(airlineID)) {
                    carrierCD = airlineCounts.get(airlineID);
                }
                else {
                    airlineCounts.set(airlineID, carrierCD);
                }

                if (res["DEP_DEL15"] == 1) {
                    var cd = Number(res["CARRIER_DELAY"]);
                    if (cd > 0) {
                        carrierCD.time += cd;
                        carrierCD.n++;
                        totalCD.time += cd;
                        totalCD.n++;
                    }
                }
            })
            .on('done', (error) => {
                //all lines read

                //average stuff
                var totalAvg = totalCD.time / totalCD.n;
                for (var [carrierId, carrierCD] of airlineCounts) {
                    var carrierAvg = carrierCD.time / carrierCD.n;
                    var cdDiff = carrierAvg - totalAvg;
                    outputStream.write(year + "," + quarter + "," + month + "," + carrierId + "," +  carrierCD.time + "," + + carrierCD.n + "\n");
                }

                outputStream.end();
                outputStream.on("finish", ()=> {
                    outputStream.close();
                });

                outputStream.on('close', function() {
                    done();
                });
            })
    });
}