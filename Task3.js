var number =[];
var n=100;
undefined(number);
function undefined(number) { 
	// body...
	for (var i =1; i <=n; i++) {
	number.push(i);
	if (i%2 === 0) {
		// number.push ('yu');
		number.push ("yu");
	}else if (i%3 === 0) {
		number.push ('gi');
	}else if (i%5 === 0){
		number.push ('oh');
	}else if (i%2 === 0 && i%3 === 0 && 1%5 ===0 ){
		number.push ('yu-gi-oh');
	}else if (i%2 === 0 && 1%3 ===0){
		number.push ('yu-gi');
	}
}
console.log(number);
return number;
}
var n=120;
undefined(number);
