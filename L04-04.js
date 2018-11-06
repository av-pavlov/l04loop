function checkCardNumber(nstr) {
	var currentFigure = 0;
	var doubleFigure = 0;
	var evenTest = 0;
	var evenS = 0;
	var notevenS = 0;
	
	for (i=nstr.length-1;i>=0;i--) {
		if (nstr.length == 13) {
			evenTest = 1;
		}
		
		currentFigure = parseInt(nstr[i]);
		
		if (i % 2 == evenTest) {
			doubleFigure = parseInt(2*currentFigure);
			if (doubleFigure > 9) {
				doubleFigure = doubleFigure % 10 + parseInt(doubleFigure / 10);
			}
			evenS += parseInt(doubleFigure);
		}
		else {
			notevenS += parseInt(currentFigure);	
			}
	}
	if ((evenS + notevenS) % 10 == 0) return 'true';
	else
		return 'false';
}

module.exports = checkCardNumber;
