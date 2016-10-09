
var largerPalindrome3DigitsProduct = function(){
    var res=0;
    var largestPalindrome= 0;
    var tab = [];
    for(var i=100; i<1000;i++){
        for(var j=100; j<1000;j++){
            res=i*j;
            if(isPalindrome(res) && res>largestPalindrome){
                largestPalindrome = res;
            }
        }
    }
    return largestPalindrome;
}

var isPalindrome = function(number){
    var nbString = number.toString();
    for(var i=0; i<nbString.length/2; i++){
        if(nbString[i] != nbString[nbString.length-1-i]){
            return false;
        }
    }
    return true;
}

console.log(largerPalindrome3DigitsProduct());
