const palindromes = function(string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-z]/g, "");
    let holder = string.split("");
    holder = holder.reverse();
    if(holder.join("") == string){
        return(true);
    }
    else{
        return(false);
    }
}

module.exports = palindromes
