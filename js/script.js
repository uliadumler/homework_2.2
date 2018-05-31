let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
		dayToday = 'среда';

for (let i = 0; i < week.length; i++) {
	if (i == 5 && week[i] == dayToday) {
		document.write('<b>' + '<i>' + week[i] + '</i>' + '</b>' + '</br>');
	} else if (i == 6 && week[i] == dayToday) {
		document.write('<b>' + '<i>' + week[i] + '</i>' + '</b>' + '</br>');
	} else if (week[i] == dayToday) {
		document.write('<i>' + week[i] + '</i>' + '</br>');
	} else if (i == 5 || i == 6) {
		document.write('<b>' + week[i] + '</b>' + '</br>');
	} else {
		document.write(week[i] + '</br>');
	}
}

let numbers = ['33', '240', '18', '730', '334', '10', '71'];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i][0] == 3 || numbers[i][0] == 7) {
		console.log(numbers[i]);
	}
}

	

