const sumAll = function(num1, num2) {
    let min;
    let max;
    let sum;
    if (typeof(num1) !== "number" || typeof(num2) !== "number"){
        return("ERROR");
    }
    if (num1 < 0 || num2 < 0){
        return("ERROR");
    }
    if (num1 >= num2){
        max = num1;
        min = num2;
        sum = 0;
    }
    else{
        max = num2;
        min = num1;
        sum = 0;
    }
    for (let i = min; i<= max; i++){
        sum += i;
    }
    return(sum);

}

module.exports = sumAll
