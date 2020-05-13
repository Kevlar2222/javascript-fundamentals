const fibonacci = function(index) {
    index = Number(index);
    if(index < 0){
        return("OOPS");
    }
    if(index == 1 || index == 2){
        return 1;
    }
    let a = 1;
    let b = 1;
    let c;
    for(let i = 0; i < index - 2; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return (c);
}

module.exports = fibonacci
