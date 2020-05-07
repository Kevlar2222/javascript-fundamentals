function add (a, b) {
	return(a + b);	
}

function subtract (a, b) {
	return(a - b);	
}

function sum (array) {
	let total = 0;
	array.forEach(value => total += value);
	return total;		
}

function multiply (array) {
	let total = 1;
	array.forEach(value => total *= value);
	return total;	
}

function power(a, b) {
	return (Math.pow(a,b));	
}

function factorial(someNumber) {
	if (someNumber == 0 || someNumber == 1){
		return 1;
	}
	else {
		let total = 1;
		while(someNumber > 1){
			total *= someNumber;
			someNumber--;
		}
		return total;
	}	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}