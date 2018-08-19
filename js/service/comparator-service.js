export function hasDatePassed(dateInMillis, safeLimitMillis) {
	let currentDateInMillis = (new Date()).getTime();
	let datesDifference = dateInMillis - currentDateInMillis;
	return datesDifference < safeLimitMillis;
}