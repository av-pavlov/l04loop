var S = 0;
var inputNumber = -1;
var k = 0;

function MedSum() {
	while (inputNumber != 0) {
		inputNumber = parseFloat(prompt());
		if (inputNumber > 0) {
			S += parseFloat(inputNumber);
			k++;
		}
		if (k == 0) return (0);
		if (inputNumber == 0) return (S / (k-1));
	}
}