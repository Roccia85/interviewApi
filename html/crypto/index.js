var seriesOptions = [],
    seriesCounter = 0,
    names = ['MSFT', 'AAPL', 'GOOG'];

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 4
        },
        legend: { enabled: true },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },
        /*series: {
            events: {
                legendItemClick: function (event) {
                    var visibility = this.visible ? 'visible' : 'hidden';
                    if (!confirm('The series is currently ' +
                        visibility + '. Do you want to change that?')) {
                        return false;
                    }
                }
            }
        }*/
/*
        plotOptions: {
            series: {
                compare: 'percent',
                showInNavigator: true
            }
        },
*/
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change})<br/>',
            valueDecimals: 2,
            split: true
        },

        series: seriesOptions
    });
}

function success(data) {
    Object.keys(data).map((key, index) => {
        seriesOptions[index] = {
            name: key,
            data: data[key]
        };
    })
    createChart();
}

Highcharts.getJSON(
    'http://localhost:8081/chartCrypto',
    success
);