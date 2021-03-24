const year = 2012;

if ((year %4 == 0 && year %100 != 0) || year %400 == 0)
	console.log('Rok', year, 'jest przestepny');
else
	console.log('Rok', year, 'nie jest przestepny');
