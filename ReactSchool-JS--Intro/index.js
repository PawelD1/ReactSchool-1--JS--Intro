const year = 2012;

if ((year %4 == 0 && year %100 != 0) || year %400 == 0)
	console.log('The year', year, 'is leap');
else
	console.log('The year', year, 'is not a leap');
