
var previousFirst = 1;
var previousSecond = 2;
var sum = 2;
var fibo=2;
for( var i= 2 ; fibo<= 4000000; i++){
    fibo = previousFirst + previousSecond;
    if(fibo%2===0) sum +=fibo;
    previousFirst = previousSecond;
    previousSecond = fibo;
}

console.log(sum);