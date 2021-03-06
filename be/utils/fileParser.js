const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');


//reading file
var parseExcelFile = (filename) => {
    //open file
    //adressees - array with adresses
    var adresses = [];
    let data = [];
    try {
        var wb = xlsx.readFile(filename);
        //read 1st sheet
        var worksheet = wb.Sheets[wb.SheetNames[0]];
        //convert data to json
        //data - array of json objects
        data = xlsx.utils.sheet_to_json(worksheet);
    }
    catch (ex) {
        console.log('ERR', ex);
        return adresses;
    }
    //making string with adress
    try {
        data.forEach(function (val, i) {
            if (i != 0) {
                var adress = val.область + '  ' + val.область_тип + ' ';
                if (val.район != null) adress += val.район + ' ' + val.район_тип;
                if (val['назва населеного пункту'] != null) adress += ' ' + val['назва населеного пункту'];
                adresses.push(adress);
            }
        });
    }
    catch (ex) {
        console.error(ex)
    }

    return adresses;
};
var parseCsvFile = (filename) => {
    //results - array of json objects

    var adresses = [];
    //reading csv file
    try {
        fs.createReadStream(filename)
            .pipe(csv())
            .on('data', (data) => adresses.push(data.adress))
            .on('end', () => { });
    }
    catch (ex) {
        console.log(">>>Error while reeading csv file " + ex);
    }
    return adresses;
};
var formingBatch = (adresses) => {
    let batch = [];   //array with 10 adresses
    var ads = [];
    try {     //array with n batches
        for (let i = 0; i < adresses.length; i++) {
            if (((i % 10) == 9) && (i != 0)) {
                batch.push(adresses[i]);
                ads.push(batch);
                batch = [];
            }
            else if (i == (adresses.length - 1)) {
                batch.push(adresses[i]);
                ads.push(batch);
            }
            else batch.push(adresses[i]);
        }
    }
    catch (ex) {

    }
    return ads;
};

exports.parse = (filename) => {
    try {
        if (path.extname(filename) == '.xls' || path.extname(filename) == '.xlsx')
            return parseExcelFile(filename);
        else if (path.extname(filename) == '.csv')
            return parseCsvFile(filename);
    }
    catch (ex) {
        console.log(ex);
        return [];
    }
};
