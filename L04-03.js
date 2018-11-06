function pyramid(n) {
	var res = "";
	var spaceCount = 0;
	var sharpCount = 0;
	for (i=1;i<=n;i++) {
			for (j=1;j<n-i+2*i;j++) {
				if (spaceCount < n-i) {
					res += ' ';
					spaceCount++;
				}
				else
					if (sharpCount < 2*i-1) {
						res += '#';
						sharpCount++;
					}
				if (spaceCount == n-i && sharpCount == 2*i-1) {
					res += '\n';
					spaceCount = 0;
					sharpCount = 0;
				}
			}
	}
	return res;
}

module.exports = pyramid;
