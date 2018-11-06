function expDiff(x) {
    var s = 1;
	var i = 1;
	var factI = 1;
	var elExp = x^i/factI;
	while (x^i/factI >= 0.0001) {
		s += usl;
		i++;
		factI *= i;
		elExp = x^i/factI;
	}
	modDiff = Math.abs(s - Math.exp(x));
	return modDiff;
}

module.exports = expDiff;
