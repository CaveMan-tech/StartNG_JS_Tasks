var data = [
{principal:2500, time:1.8}, 
{principal:1000, time:5}, 
{principal:3000, time:1}, 
{principal:2000, time:3},
];
var interestData = [];
function interestCalculator(interestData) {
	for (var i = 0; i < data.length; i++) {
		if (interestData[i].principal >=2500 && interestData[i].time >1 && interestData[i].time < 3){
			interestData[i].rate=3;
		}else if (interestData[i].principlal >=2500 && interestData[i].time >=3){
			interestData[i].rate=4;
		}else if (interestData[i].principal <2500 || interestData[i].time<=1){
			interestData[i].rate=2;
		}else interestData[i].rate=1;
		interestData[i].interest = ((interestData[i].principal * interestData[i].time * interestData[i].rate)/100);
	}
	console.log(interestData);
	return interestData;
}
interestCalculator(data);