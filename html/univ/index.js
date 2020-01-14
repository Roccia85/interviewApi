/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart() {

    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of Universities by State'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Italy', 'Turkey', 'Albania', 'Germany', 'France'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'University',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' unit'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: seriesOptions
    });
}

function success(data) {
    seriesOptions = data
    createChart();
}

Highcharts.getJSON(
    'http://localhost:8081/chartUniversities',
    success
);