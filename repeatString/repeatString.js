const repeatString = function(text, number) {
    let aString = "";
    if(number==0){
        return("");
    }
    if(number < 0) {
        return("ERROR");
    }
    for (let i = 0; i <= number-1; i++){
        aString += text;
        if(i==number-1){
            return(aString);
        }
    }
}


module.exports = repeatString
