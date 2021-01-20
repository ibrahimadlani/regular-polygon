function polygon(n) {
    var cos = 1;
    var sin = 0;

    var listx = [];
    var listy = [];

    for (let i = 0; i < n; i++) {
        if (i < n/2) {
            listx.push(Math.sin(i*(2*(Math.PI)/n)));
            if (i>(n/4)) {listy.push(Math.cos(i*(2*(Math.PI)/n)));}
            else{listy.push(Math.cos(i*(2*(Math.PI)/n)));}
        }else if  (i == n/2){
            listx.push(Math.sin(i*(2*(Math.PI)/n)));
            listy.push(Math.cos(i*(2*(Math.PI)/n)));
        }else if  (i > n/2){
            listx.push(Math.sin(i*(2*(Math.PI)/n)));
            if (i>(3*n/4)) {listy.push(Math.cos(i*(2*(Math.PI)/n)));}
            else{listy.push(Math.cos(i*(2*(Math.PI)/n)));}
        }
    }
    return [listx,listy]
}

function pointConstructor(n) {
    var data = []

    for (let i = 0; i < polygon(n)[0].length; i++) {
        data.push({x:polygon(n)[0][i],y:polygon(n)[1][i]})
    }

    return data;
}

var ctx = document.getElementById('chart').getContext('2d');    
var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'i(2π/n)',
                backgroundColor: 'rgb(192, 0, 0)',
                borderColor: ' rgb(100, 0, 0)',
                data: pointConstructor(10)
            }]
        },
        options: {
            hover: {mode: null},
            tooltips: {enabled: false},
            scales: {
                ticks: {display: false},
                xAxes: [{
                    gridLines : {display:false},
                    type: 'linear',
                    position: 'bottom'
                }],
                yAxes: [{
                    gridLines : {display:false,},
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });

function updateChart(n){
    chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'i('+n+'π/n)',
                backgroundColor: 'rgb(192, 0, 0)',
                borderColor: ' rgb(100, 0, 0)',
                data: pointConstructor(n)
            }]
        },
                    
        options: {
            hover: {mode: null},
            tooltips:false,
            animation: false,
            scales: {
                xAxes: [{
                    gridLines : {display:false},
                    type: 'linear',
                    position: 'bottom'
                    
                }],
                yAxes: [{
                    gridLines : {display:false},
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
}