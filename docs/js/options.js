const options = {
    title: {
        display: false,
    },
    legend: {
        display: true,
    },
    tooltips: {
        callbacks: {
            label: (tooltipItem, data) => {
                return `score: ${tooltipItem.index + 1}, time: ${tooltipItem.label}`;
            },
        },
    },
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: '時間(秒)',
            },
            gridLines: {
                display: true,
                color: '#ffffff',
                zeroLineColor: '#ddd',
                zeroLineWidth: 2,
            },
            ticks: {
                fontColor: '#333',
            },
        }],
        yAxes: [{
            scaleLabel: {
                display: false,
            },
            gridLines: {
                zeroLineColor: '#ddd',
                zeroLineWidth: 2,
            },
            ticks: {
                display: false,
                min: -1,
                max: 5,
                stepSize: 5,
            }
        }]
    },
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                enabled: true,
                mode: 'x',
                sensitivity: 3
            }
        },
        colorschemes: {
            scheme: 'brewer.Accent8'
        },
    }
};