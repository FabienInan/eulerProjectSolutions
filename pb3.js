


var largestPrimeFactor = function(number){
    var divider =1;
    var biggerPrimeFactor = 1;
    while(number>1){
        divider = divider+1;
        if(number%divider==0){
            biggerPrimeFactor = divider;
            number/=divider;
        }
    }
    return divider;
}


console.log(largestPrimeFactor(600851475143));