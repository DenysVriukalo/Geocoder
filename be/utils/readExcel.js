const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser')
const geopoint = require('./geopoint.model');


//reading file
var parsingExcelFile = (filename) => {
    //open file
    //adressees - array with adresses
    var adresses = [];
    var wb = xlsx.readFile(filename);
    //read 1st sheet
    var worksheet = wb.Sheets[wb.SheetNames[0]];
    //convert data to json
    //data - array of json objects
    let data = xlsx.utils.sheet_to_json(worksheet);
    //making string with adress
    data.forEach(function (val, i, data) {
        if (i != 0) {
            var adress = val.область + '  ' + val.область_тип + ' ';
            if (val.район != null) adress += val.район + ' ' + val.район_тип;
            if (val['назва населеного пункту'] != null) adress += ' ' + val['назва населеного пункту'];
            adresses.push(adress);
        }

    });
    console.log(adresses);
    return adresses;

};
var parsingCsvFile = (filename) => {
    //results - array of json objects
    var adresses = [];
    let results = [];
    //reading csv file
    fs.createReadStream(filename)
        .pipe(csv())
        .on('data', (data) => adresses.push(data.adress))
        .on('end', () => {    });
    return adresses;
};

var parsingFile = (filename) => {
    if (path.extname(filename) == '.xls' || path.extname(filename) == '.xlsx')
        return parsingExcelFile(filename);
    else if (path.extname(filename) == '.csv')
        return parsingCsvFile(filename);
};

//parsingExcelFile("D:\\Даня\\Project\\Gerodot\\files\\fungi.xlsx");

//parsingCsvFile("D:\\Даня\\Project\\Gerodot\\files\\animal_reports.csv");
//console.log( parsingFile("D:\\Даня\\Project\\Gerodot\\files\\fungi.xlsx"));
module.exports=parsingFile;