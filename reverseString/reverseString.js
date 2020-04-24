const reverseString = function(text) {
    let reverse = "";
    let length = text.length;
    for (i = length-1; i >= 0; i--){
        reverse += text.charAt(i);
    }
    return(reverse);
}

module.exports = reverseString
