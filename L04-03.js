function pyramid(n) {
	var result = '';
	for (i=0;i<n;i++) {
		for (j=0;j<i;j++) {
			result += '#';
		}
		result += "\n";
	}
	return(result);
}

module.exports = pyramid;
