// alphavantage apiKey J06QACM0IZY7CCHY 
// https://www.alphavantage.co/documentation (closing daily US con USD market)
const moment = require("moment") //https://momentjs.com/docs/
const exampleData = require("./exampleDataCrypto.json")
module.exports.default = function (req, res, next) {
    var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise
    res.send(exampleData)
}

