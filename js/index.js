function polygone(n) {
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