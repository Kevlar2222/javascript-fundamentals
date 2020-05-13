let findTheOldest = function(array) {
    const ordered = array.sort(function(a, b){
        if(a.yearOfDeath === undefined){
            let date = new Date();
            a.yearOfDeath = date.getFullYear();
        }
        if(b.yearOfDeath === undefined){
            let date = new Date();
            b.yearOfDeath = date.getFullYear();
        }
        if(a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return -1;
        }
        else{
            return 1;
        }
    });
    return ordered[0];
}

module.exports = findTheOldest
