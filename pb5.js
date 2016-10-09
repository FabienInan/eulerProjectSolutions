

var decomposePrimeFactor = function(number){
    var divider= number;
    var tab = [];
    while(divider>0){
        if(number%divider==0){
            tab.push(number/divider);
            number = divider;
        }
        divider = divider-1;
    }
    return tab;
}

var countNumberOfEachPrimeFactor = function(tab, tabCount){
    var count = 0;
    var tabCountLocal = new Array(20);
    var counter = 0;
    for(var i=0; i<tab.length; i++){
        if(!tabCountLocal[tab[i]-1]){
            tabCountLocal[tab[i]-1] = 1;
        }
        else{
            tabCountLocal[tab[i]-1]++;
        }
    }
    if(tabCount.length == 0){
        tabCount = tabCountLocal;
    }
    else{
        for(var i=0; i<tabCount.length;i++){
            if(!tabCount[i] || tabCountLocal[i]>tabCount[i]){
                tabCount[i] = tabCountLocal[i];
            }
        }
    }
    return tabCount;
}

var productFactor = function(tab){
    var product = 1;
    for(var i=0; i<tab.length;i++){
        if(tab[i]){
            product *= Math.pow((i+1),tab[i]);
        }
    }
    return product;
}


console.time('someFunction');
var primeFactor;
var tabCount = new Array(20);
for(var i=1;i<=20;i++){
    primeFactor = decomposePrimeFactor(i);
    tabCount = countNumberOfEachPrimeFactor(primeFactor,tabCount);
}
console.log(productFactor(tabCount));
console.timeEnd('someFunction');