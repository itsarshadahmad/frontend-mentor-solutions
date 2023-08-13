export function checkLeapYear(year) {
	if (year % 400 === 0) return true;
	if (year % 100 === 0) return false;
	if (year % 4 === 0) return true;
	return false;
}

export function calculateDate(birthYear, birthMonth, birthDays) {
	if (!isNaN(birthYear) && !isNaN(birthMonth) && !isNaN(birthDays)) {
		const date = new Date();
		let calculatedYears = date.getFullYear() - birthYear;
		let calculatedMonths = date.getMonth() - birthMonth;
		let calculatedDays = date.getDate() - birthDays;

		if (calculatedMonths < 0) {
			calculatedYears -= 1;
			calculatedMonths += 12;
		}

		if (calculatedDays < 0) {
			calculatedMonths -= 1;
			calculatedDays += 30;
		}

		return {
			years: calculatedYears,
			months: calculatedMonths,
			days: calculatedDays,
		};
	}
}
