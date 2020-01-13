// alphavantage apiKey J06QACM0IZY7CCHY
// https://www.alphavantage.co/documentation (closing daily US con USD market)
const moment = require('moment'); //https://momentjs.com/docs/
const exampleData = require('./exampleDataCrypto.json');

module.exports.default = function(req, res, next) {
  var rp = require('request-promise'); //https://www.npmjs.com/package/request-promise
  var finalObj = new Object();
  finalObj.ETH = [];
  finalObj.BTC = [];
  finalObj.LTC = [];

  // ETH
  getMoney('ETH').then(eth => {
    finalObj.ETH = eth.reverse();
    return getMoney('BTC').then(btc => {
      finalObj.BTC = btc.reverse();
      return getMoney('LTC').then(ltc => {
        finalObj.LTC = ltc.reverse();
        res.send(finalObj);
      });
    });
  });
};

function getMoney(code) {
  let codeTmp = [];
  var rp = require('request-promise');
  var options = {
    uri:
      'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=' +
      code +
      '&market=USD&apikey=J06QACM0IZY7CCHY',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  return rp(options).then(function(repos) {
    var finalResult = repos['Time Series (Digital Currency Daily)'];

    for (const prop in finalResult) {
      // section to manage date
      var newDate = moment.utc(prop, 'YYYY-MM-DD');
      var tmp = finalResult[prop];
      var myObj = Number(parseFloat(tmp['1a. open (USD)']).toFixed(2));
      //var twoPlacedFloat = parseFloat(yourString).toFixed(2)
      codeTmp.push([newDate.unix() * 1000, myObj]);

      //console.log(`${newDate.unix()} = ${myObj}`);
      // counter++;
    }
    //   console.log(ETH);
    return codeTmp;
  });
}
