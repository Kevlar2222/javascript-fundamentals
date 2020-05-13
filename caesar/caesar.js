const caesar = function(string, shift) {
    let length = string.length;
    let newString = new String();
    for(let i = 0; i<= length; i++){
        let code = string.charCodeAt(i);
        if(65 <= code && code <= 90 || 97 <= code && code <= 122){
            code += shift%26;
            if(code > 90 && string.charCodeAt(i)<=90){
                code = 65 + (code - 91);
            }
            if(code > 122 && string.charCodeAt(i)<=122){
                code = 97 + (code - 123);
            }
            if(code < 65 && string.charCodeAt(i)>=65){
                code = 90 - (64 - code);
            }
            if(code < 97 && string.charCodeAt(i)>=97){
                code = 122 - (96 - code);
            }            
        }
        
        newString += String.fromCharCode(code);     
    }
    return (newString);
}

module.exports = caesar
