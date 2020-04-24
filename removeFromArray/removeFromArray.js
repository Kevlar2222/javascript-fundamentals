const removeFromArray = function(...args) {
    const array = args[0];
    let secondArray = [];
    const length = array.length;
    for (let i = 0; i < length; i++){
        if(!args.includes(array[i])){
            secondArray.push(array[i]);
        }
    }

    return secondArray;

}

module.exports = removeFromArray
