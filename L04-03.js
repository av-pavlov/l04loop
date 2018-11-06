<<<<<<< HEAD
function pyramid(n) {
	var res = "#";
	// напишите код, обратите внимание, что пробелы 
	// должны быть в начале строки, но не в конце

	return res;
}

module.exports = pyramid;
	
=======
function pyramid(n) {
	var result = '';
	for (i=0;i<n;i++) {
		for (j=0;j<=i;j++) {
			result += '#';
		}
		result += "\n";
	}
	return(result);
}

module.exports = pyramid;
>>>>>>> be8730a2635f42f636ba5d394d200737d7d44e98
